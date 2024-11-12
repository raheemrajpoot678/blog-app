import { Link } from "react-router-dom";
import Gutter from "./Gutter";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-stone-300 text-stone-800">
      <Gutter className="pt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12">
          {/* Logo or Site Info Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6">Your Blog Hub</h2>
            <p className="text-stone-600 text-base leading-relaxed">
              Discover insightful articles, guides, and updates on various
              topics. Stay informed and inspired with our latest posts.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/category/tech"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Tech
                </Link>
              </li>
              <li>
                <Link
                  to="/category/health"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Health
                </Link>
              </li>
              <li>
                <Link
                  to="/category/lifestyle"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Lifestyle
                </Link>
              </li>
              <li>
                <Link
                  to="/category/travel"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Travel
                </Link>
              </li>
              <li>
                <Link
                  to="/category/education"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Education
                </Link>
              </li>
            </ul>
          </div>

          {/* Recent Posts Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Recent Posts</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/blog/how-to-improve-productivity"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  How to Improve Productivity
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/top-travel-destinations"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Top Travel Destinations
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/healthy-living-tips"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Healthy Living Tips
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/tech-trends-2024"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Tech Trends 2024
                </Link>
              </li>
              <li>
                <Link
                  to="/blog/best-online-courses"
                  className="text-stone-600 hover:text-stone-800 transition"
                >
                  Best Online Courses
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-6">
              <a
                href="https://facebook.com"
                className="text-stone-600 hover:text-stone-800 transition"
                aria-label="Facebook"
              >
                <FaFacebookF size={28} />
              </a>
              <a
                href="https://twitter.com"
                className="text-stone-600 hover:text-stone-800 transition"
                aria-label="Twitter"
              >
                <FaTwitter size={28} />
              </a>
              <a
                href="https://instagram.com"
                className="text-stone-600 hover:text-stone-800 transition"
                aria-label="Instagram"
              >
                <FaInstagram size={28} />
              </a>
              <a
                href="https://linkedin.com"
                className="text-stone-600 hover:text-stone-800 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={28} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center py-6 mt-12 border-t border-stone-400">
          <p className="text-stone-600 text-base">
            &copy; {new Date().getFullYear()} Your Blog Hub. All Rights
            Reserved.
          </p>
        </div>
      </Gutter>
    </footer>
  );
}
