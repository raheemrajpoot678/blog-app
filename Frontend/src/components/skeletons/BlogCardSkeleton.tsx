function BlogCardSkeleton() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col justify-between h-full animate-pulse">
      {/* Title Skeleton */}
      <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>

      {/* Content Skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 w-full bg-gray-300 rounded"></div>
        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
      </div>

      {/* Footer Skeleton */}
      <div className="flex justify-between items-center mt-4">
        <div className="h-4 w-1/4 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
}

export default BlogCardSkeleton;
