import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import axios from "axios";
import Gutter from "@/components/Gutter";

const schema = z.object({
  title: z.string().min(3, {
    message: "Title is required and should be at least 3 characters",
  }),
  content: z
    .string()
    .min(10, { message: "Content should be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

export const apiUrl = "http://localhost:5000";

export default function CreateBlog() {
  const [loading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setIsLoading(true);
    try {
      await axios.post(`${apiUrl}/blogs`, data);
      alert("Blog created successfully!");
    } catch (error) {
      console.error("Error creating blog:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <Gutter className="pt-24 pb-16 sm:pb-3 sm:mb-8 min-h-screen flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 font-mono">
        Create a New Blog
      </h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col flex-grow"
      >
        {/* Title Field */}
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="title"
          >
            Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter blog title"
            {...register("title")}
            className={`mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md text-sm ${
              errors.title ? "border-red-500" : ""
            }`}
          />
          {errors.title && (
            <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Content Field */}
        <div className="flex-grow mb-4 flex flex-col">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="content"
          >
            Content
          </label>
          <textarea
            id="content"
            placeholder="Write your content here..."
            {...register("content")}
            className={`mt-1 block w-full px-4 flex-grow py-2 border border-gray-300 rounded-md text-sm h-full resize-none ${
              errors.content ? "border-red-500" : ""
            }`}
            style={{ minHeight: "200px" }}
          />
          {errors.content && (
            <p className="text-red-500 text-xs mt-1">
              {errors.content.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-fit self-end bg-stone-900 text-white flex items-center justify-center gap-3 h-10 px-4 rounded "
        >
          {loading && <AiOutlineLoading className="animate-spin" />}
          <p>Upload Blog</p>
        </button>
      </form>
    </Gutter>
  );
}
