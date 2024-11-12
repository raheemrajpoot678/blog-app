import Gutter from "@/components/Gutter";
import BlogPostSkeleton from "@/components/skeletons/BlogPostSkeleton";
import { usePost } from "@/hooks/usePost";
import { formatTimestampToReadableDate } from "@/utils/helpers";
import { useEffect } from "react";
import { FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
// dummyData.js

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>() || 1;
  const { data: post, isLoading } = usePost(postId!);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (isLoading) return <BlogPostSkeleton />;
  if (!post) {
    return (
      <Gutter className="py-8 pt-24 min-h-screen flex flex-col justify-between">
        <h2 className="text-3xl font-bold text-gray-800">Blog Not Found</h2>
        <div className="mt-8">
          <button
            onClick={() => window.history.back()}
            className="bg-stone-800 text-white px-5 py-2 rounded-full font-semibold shadow-md  hover:bg-stone-950  flex items-center space-x-2"
          >
            <FaArrowLeft className="text-lg" />
            <span>Back to Blogs</span>
          </button>
        </div>
      </Gutter>
    );
  }
  return (
    <Gutter className="py-8 min-h-screen pt-24 flex flex-col justify-between">
      <div>
        <h1 className="text-2xl  sm:text-4xl font-bold text-gray-800 mb-4">
          {post.title}
        </h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <FaUser className="mr-2" />
          <span className="mr-4">By {post.author.username}</span>
          <FaCalendarAlt className="mr-2" />
          <span>{formatTimestampToReadableDate(post.createdAt)}</span>
        </div>
        <div className="text-gray-700 leading-relaxed space-y-6">
          <p>{post.content}</p>
        </div>
      </div>

      <div className="mt-8">
        <button
          onClick={() => window.history.back()}
          className="bg-stone-800 text-white px-5 py-2 rounded-full font-semibold shadow-md  hover:bg-stone-950  flex items-center space-x-2"
        >
          <FaArrowLeft className="text-lg" />
          <span>Back to Blogs</span>
        </button>
      </div>
    </Gutter>
  );
}
