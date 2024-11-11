// src/types/express.d.ts or wherever you place custom types
declare namespace Express {
  interface Request {
    user?: {
      _id: string; // The user ID (adjust based on your user schema)
      username: string;
      role: "user" | "admin";
    };
  }
}
