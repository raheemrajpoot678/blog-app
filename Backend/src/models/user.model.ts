import { NextFunction } from "express";
import bcrypt from "bcryptjs";
import mongoose, { ObjectId } from "mongoose";
import jwt from "jsonwebtoken";

interface IUser extends Document {
  _id: ObjectId; // Correct type for MongoDB
  username: string;
  password: string;
  role: "user" | "admin";
  generateAuthToken: () => string;
  correctPassword: (candidatePassword: string, userPassword: string) => string; // Add the method signature
}

const UserSchema = new mongoose.Schema<IUser>({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

UserSchema.pre("save", async function (next: NextFunction) {
  if (!this.isModified("password")) next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

UserSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  return token;
};

UserSchema.methods.correctPassword = async function (
  candidatePassword: string,
  userPassword: string
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", UserSchema);
export default User;
