import Gutter from "@/components/Gutter";
import { useEffect } from "react";
import { FaUser, FaCalendarAlt, FaArrowLeft } from "react-icons/fa";
import { useParams } from "react-router-dom";
// dummyData.js

const blogPosts = [
  {
    id: "1",
    title: "How to Improve Productivity",
    content:
      "Productivity is key to achieving your goals. In this post, we discuss tips and strategies for improving productivity in both your personal and professional life Productivity is key to achieving your goals. In this post, we discuss tips and strategies for improving productivity in both your personal and professional life",
    author: "John Doe",
    date: "November 10, 2024",
  },
  {
    id: "2",
    title: "Top Travel Destinations",
    content:
      "Traveling opens up new horizons and enriches the soul. Here are some top travel destinations you should consider for your next adventure Productivity is key to achieving your goals. In this post, we discuss tips and strategies for improving productivity in both your personal and professional life",
    author: "Jane Smith",
    date: "November 9, 2024",
  },
  {
    id: "3",
    title: "Healthy Living Tips",
    content:
      "Living a healthy lifestyle is essential for physical and mental well-being. This article provides practical tips to maintain a balanced, healthy life Productivity is key to achieving your goals. In this post, we discuss tips and strategies for improving productivity in both your personal and professional life",
    author: "Mike Johnson",
    date: "November 8, 2024",
  },
];
// Import dummy data

export default function BlogPost() {
  const { postId } = useParams<{ postId: string }>() || 1;

  const post = blogPosts.find((post) => post.id === postId);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  if (!post) {
    return (
      <Gutter className="py-8 pt-24">
        <h2 className="text-3xl font-bold text-gray-800">Post Not Found</h2>
        <button
          onClick={() => window.history.back()}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-full font-semibold shadow-md hover:from-purple-600 hover:to-blue-500 transition-all duration-300 mt-6"
        >
          Back to Blogs
        </button>
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
          <span className="mr-4">By {post.author}</span>
          <FaCalendarAlt className="mr-2" />
          <span>{post.date}</span>
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
