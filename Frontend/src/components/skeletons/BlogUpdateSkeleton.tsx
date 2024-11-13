import Gutter from "../Gutter";

const BlogUpdateSkeleton = () => {
  return (
    <Gutter className="relative pt-24 pb-16 sm:pb-3 sm:mb-8 min-h-screen flex flex-col">
      <h2 className="text-2xl font-semibold mb-6 font-mono">
        <div className="w-40 h-6 bg-gray-300 animate-pulse rounded"></div>
      </h2>
      <form className="flex flex-col flex-grow">
        {/* Title Field */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
          </label>
          <div className="mt-1 w-full h-10 bg-gray-300 animate-pulse rounded"></div>
        </div>

        {/* Content Field */}
        <div className="flex-grow mb-4 flex flex-col">
          <label className="block text-sm font-medium text-gray-700">
            <div className="w-24 h-4 bg-gray-300 animate-pulse rounded"></div>
          </label>
          <div className="mt-1 w-full h-32 bg-gray-300 animate-pulse rounded"></div>
        </div>

        {/* Submit Button */}
        <div className="w-fit self-end">
          <div className="w-32 h-10 bg-gray-300 animate-pulse rounded"></div>
        </div>
      </form>
    </Gutter>
  );
};

export default BlogUpdateSkeleton;
