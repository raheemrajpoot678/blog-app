import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { LiaTimesSolid } from "react-icons/lia";
import axios from "axios";
import { useState } from "react";
import Overlay from "@/components/Overlay";
import { toast } from "react-toastify";
import { login } from "@/redux/userSlice";
import { apiUrl } from "./Login";
import { useDispatch } from "react-redux";

const schema = z.object({
  username: z.string().min(3, { message: "Username is required!" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" }),
});

type FormData = z.infer<typeof schema>;

export default function Register() {
  const [loading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      const res = await axios.post(
        `${apiUrl}/api/auth/register`,
        {
          username: data.username,
          password: data.password,
        },
        {
          withCredentials: true,
        }
      );
      console.log("RES :", res);
      if (res.data.status === "success") {
        toast.success(`🖤 Wellcome Back! ${res?.data?.user?.username}`);
        reset();
        navigate("/");
        dispatch(
          login({
            id: res.data.user._id,
            role: res.data.user.role,
            username: res.data.user?.username,
          })
        );
      }
    } catch (error: any) {
      console.log("ERROR :", error);
      if (error.response && error.response.data) {
        const errMessage = error.response.data.message;
        toast.error(`❌ ${errMessage}`);
      } else {
        toast.error("❌ An unexpected error occurred");
      }
      reset();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-screen z-50">
      <Overlay />
      <div className="bg-white fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-4 z-50 rounded-lg shadow-sm max-w-sm w-[95%] px-6">
        {/* Close Button */}
        <button
          className="absolute right-4 top-4 hover:bg-gray-100 rounded-md p-1"
          onClick={() => navigate("/")}
        >
          <LiaTimesSolid />
        </button>

        <div className="flex justify-center mb-4">
          <img src="/logo.png" alt="Logo" className="h-24" />
        </div>

        <div>
          {/* Heading */}
          <h2 className="text-xl font-semibold text-center mb-2">
            Create an Account
          </h2>
          <p className="text-center text-gray-500 mb-4">
            Please fill in your details to register.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Username */}
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
              className="w-full bg-black flex items-center justify-center gap-3 text-white h-9 px-4 rounded-lg hover:bg-gray-800 transition-all"
            >
              {loading && <AiOutlineLoading className="animate-spin" />}
              <p className="">Register</p>
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Already have an account?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-black font-semibold hover:underline"
            >
              Log in
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
