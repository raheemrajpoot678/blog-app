import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { useEffect, useState } from "react";
import Overlay from "@/components/Overlay";

const schema = z.object({
  username: z.string().min(3, { message: "Username Required!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormData = z.infer<typeof schema>;

export const apiUrl = "http://localhost:5000";

export default function Login() {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50">
      <Overlay />
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 z-50 rounded-lg shadow-sm max-w-sm w-[95%] px-6">
        {/* Logo */}
        <button
          className="absolute right-4 top-4 hover:bg-gray-100 rounded-md p-1"
          onClick={() => navigate("/")}
        >
          <LiaTimesSolid />
        </button>

        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-24 " />{" "}
        </div>

        <div>
          {/* Heading */}
          <h2 className="text-xl font-semibold text-center mb-2">
            Welcome back
          </h2>{" "}
          <p className="text-center text-gray-500 mb-4">
            Please enter your details to login.
          </p>
          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* User Aname */}
            <div className="mb-3">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="username"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                autoComplete="off"
                placeholder="john678"
                {...register("username")}
                className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm ${
                  errors.username ? "border-red-500" : ""
                }`}
              />
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            {/* Password */}
            <div className="mb-3">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                autoComplete="off"
                placeholder="• • • • • • • •"
                {...register("password")}
                className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm ${
                  errors.password ? "border-red-500" : ""
                }`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-black flex items-center justify-center gap-3 text-white h-9 px-4 rounded-lg hover:bg-gray-800 transition-all "
            >
              {loading && <AiOutlineLoading className="animate-spin" />}
              <p className="">Log in</p>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Don't have an account yet?{" "}
            <button
              onClick={() => navigate("/register")}
              className="text-black font-semibold hover:underline"
            >
              Register
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
