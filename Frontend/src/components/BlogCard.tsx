import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

type BlogCardProps = {
  title: string;
  content: string;
  author: string;
};

function BlogCard({ title, content, author }: BlogCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 h-full">
      {/* Title with Icon */}
      <div className="flex items-center mb-2">
        <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
      </div>

      {/* Content */}
      <p className="text-gray-600 text-base mb-4">
        {content.length > 150 ? `${content.substring(0, 150)}...` : content}
      </p>

      {/* Footer */}
      <div className="flex justify-between items-center mt-4">
        {/* Author with Icon */}
        <span className="text-gray-500 text-sm flex items-center">
          <FaUser className="mr-1" />
          By {author}
        </span>

        {/* Read More Button */}
        <Link
          to={`/blog/1`}
          className="px-5 py-2 rounded font-serif border-2 hover:shadow-sm text-stone-700 "
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
