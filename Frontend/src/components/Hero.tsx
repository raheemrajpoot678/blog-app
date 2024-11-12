import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      className="relative bg-cover bg-center h-screen flex flex-col justify-center items-center text-white"
      style={{
        backgroundImage: "url('/hero.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/80"></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-3xl mt-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide leading-tight">
          Discover Insights and Inspiration
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 max-w-2xl text-gray-200">
          Our blog is a space where ideas come alive, providing tips, stories,
          and insights designed to elevate your perspective and inspire action.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/blogs"
            className="bg-primary px-6 py-2 sm:px-8 sm:py-3 rounded text-base sm:text-lg font-semibold hover:bg-primary-dark w-full sm:w-auto text-center"
          >
            Explore Blogs
          </Link>
          <Link
            to="/about"
            className="bg-transparent border border-white px-6 py-2 sm:px-8 sm:py-3 rounded text-base sm:text-lg font-semibold w-full sm:w-auto text-center"
          >
            About Us
          </Link>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-gray-300">
        <svg
          className="w-6 h-6 sm:w-8 sm:h-8 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </div>
    </div>
  );
}
