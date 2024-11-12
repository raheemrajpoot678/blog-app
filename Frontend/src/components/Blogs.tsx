import BlogCard from "./BlogCard";
import Gutter from "./Gutter";
import { usePosts } from "@/hooks/usePosts";
import BlogCardSkeleton from "./skeletons/BlogCardSkeleton";

type Blog = {
  _id: string;
  title: string;
  content: string;
  author: {
    username: string;
    _id: string;
  };
};

export default function Blogs() {
  const { data, isLoading, isError, error } = usePosts();

  if (isError) return <p className="text-xl text-red-500">{error.message}</p>;
  return (
    <Gutter className="pb-12">
      <h2 className="text-2xl font-semibold py-8 font-mono text-center relative">
        --- Our Blogs ---
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {isLoading
          ? Array.from({ length: 6 }, (_, i) => <BlogCardSkeleton key={i} />)
          : data?.map((blog: Blog) => (
              <BlogCard
                key={blog._id}
                title={blog.title}
                content={blog.content}
                author={blog.author.username}
                id={blog._id}
              />
            ))}
      </div>
    </Gutter>
  );
}
