import Gutter from "@/components/Gutter";

export default function BlogPostSkeleton() {
  return (
    <Gutter className="py-8 min-h-screen pt-24 flex flex-col justify-between animate-pulse">
      <div>
        {/* Title Skeleton */}
        <div className="h-8 w-3/4 bg-gray-300 rounded mb-4"></div>

        {/* Meta Information Skeleton */}
        <div className="flex items-center text-gray-500 text-sm mb-6 space-x-4">
          <div className="h-4 w-24 bg-gray-300 rounded"></div>
          <div className="h-4 w-32 bg-gray-300 rounded"></div>
        </div>

        {/* Content Skeleton */}
        <div className="space-y-4">
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-11/12 bg-gray-300 rounded"></div>
          <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
          <div className="h-4 w-full bg-gray-300 rounded"></div>
          <div className="h-4 w-3/4 bg-gray-300 rounded"></div>
        </div>
      </div>

      {/* Back Button Skeleton */}
      <div className="mt-8">
        <div className="h-10 w-36 bg-gray-300 rounded-full"></div>
      </div>
    </Gutter>
  );
}
