import Gutter from "@/components/Gutter";
import { FaUsers, FaPenNib, FaLightbulb, FaHeart } from "react-icons/fa";

export default function About() {
  return (
    <Gutter className="pt-24 pb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        About Us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
        Welcome to <span className="font-semibold">Your Blog Hub</span>! We're a
        dedicated platform for sharing knowledge, insights, and stories that
        matter. Our mission is to inspire and inform our readers with a variety
        of topics covering technology, health, lifestyle, travel, and more.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Community Section */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg  transition-shadow duration-300">
          <FaUsers size={50} className="text-blue-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Community
          </h2>
          <p className="text-gray-600">
            We are more than just a blog. We're a community of passionate
            individuals who love to share and explore new ideas together.
          </p>
        </div>

        {/* Our Writers Section */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg  transition-shadow duration-300">
          <FaPenNib size={50} className="text-green-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Writers
          </h2>
          <p className="text-gray-600">
            Our writers bring a diverse set of skills and experiences to the
            table, crafting content that engages, educates, and inspires.
          </p>
        </div>

        {/* Our Vision Section */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg  transition-shadow duration-300">
          <FaLightbulb size={50} className="text-yellow-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Vision
          </h2>
          <p className="text-gray-600">
            We envision a world where knowledge is freely accessible, helping
            everyone grow and find inspiration through shared stories and ideas.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="flex flex-col items-center text-center p-6 bg-white shadow-md rounded-lg  transition-shadow duration-300">
          <FaHeart size={50} className="text-red-500 mb-4" />
          <h2 className="text-2xl font-semibold mb-2 text-gray-800">
            Our Values
          </h2>
          <p className="text-gray-600">
            Integrity, passion, and community are at the heart of what we do. We
            strive to create a welcoming space for everyone.
          </p>
        </div>
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-700 text-lg">
          Thank you for being a part of our journey! We hope you enjoy exploring
          our blog as much as we enjoy creating it for you.
        </p>
      </div>
    </Gutter>
  );
}
