import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineLoading } from "react-icons/ai";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import Gutter from "@/components/Gutter";
import { toast } from "react-toastify";
import { QueryClient } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { useUpdatePost } from "@/hooks/useUpdatePost";
import { usePost } from "@/hooks/usePost";
import BlogUpdateSkeleton from "@/components/skeletons/BlogUpdateSkeleton";

const schema = z.object({
  title: z.string().min(3, {
    message: "Title is required and should be at least 3 characters",
  }),
  content: z
    .string()
    .min(10, { message: "Content should be at least 10 characters" }),
});

type FormData = z.infer<typeof schema>;

export default function UpdatePost() {
  const { mutate, isPending } = useUpdatePost();
  const navigate = useNavigate();
  const { postId = "" } = useParams();
  const { data: post, isLoading } = usePost(postId);

  const queryClient = new QueryClient();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { title: "", content: "" },
  });

  useEffect(() => {
    if (post) {
      reset({
        title: post.title || "",
        content: post.content || "",
      });
    }
  }, [post, reset]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      mutate(
        { id: postId, data },
        {
          onSuccess: () => console.log("Data updated successfully"),
          onError: (err) => console.error("Error updating data:", err),
        }
      );
      reset();
      toast.success("Blog UPdated successfully!");
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
      navigate("/");
      window.scrollTo({ top: 490, behavior: "smooth" });
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error during submission:", err.message);
        if ((err as any).response?.data?.message) {
          toast.error(
            `Submission error: ${(err as any).response.data.message}`
          );
        } else {
          toast.error("An unknown error occurred.");
        }
      }
    }
  };

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (isLoading) return <BlogUpdateSkeleton />;
  return (
    <Gutter className=" relative pt-24 pb-16 sm:pb-3 sm:mb-8 min-h-screen flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 font-mono">UPdate BLog</h2>
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
          disabled={isPending}
          className="w-fit self-end bg-stone-900 text-white flex items-center justify-center gap-3 h-10 px-4 rounded "
        >
          {isPending && <AiOutlineLoading className="animate-spin" />}
          <p>UPdate Blog</p>
        </button>
      </form>
    </Gutter>
  );
}
