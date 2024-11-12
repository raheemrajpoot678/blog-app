import Gutter from "@/components/Gutter";
import { FaEnvelope, FaPhone, FaLocationArrow } from "react-icons/fa";

export default function Contact() {
  return (
    <Gutter className="pt-24 pb-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">
        Contact Us
      </h1>
      <p className="text-gray-700 text-lg leading-relaxed mb-8 text-center">
        We'd love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out to us.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Info Section */}
        <div className="flex flex-col items-start text-left p-6 bg-white border rounded-lg  transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Contact Information
          </h2>
          <div className="flex items-center mb-6">
            <FaEnvelope size={20} className="text-blue-500 mr-4" />
            <p className="text-gray-600">contact@yourbloghub.com</p>
          </div>
          <div className="flex items-center mb-6">
            <FaPhone size={20} className="text-green-500 mr-4" />
            <p className="text-gray-600">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center mb-6">
            <FaLocationArrow size={20} className="text-red-500 mr-4" />
            <p className="text-gray-600">1234 Blog St, Blog City, BC 56789</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex flex-col items-center text-left p-6 bg-white border rounded-lg  transition-shadow duration-300">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            Send Us a Message
          </h2>
          <form className="w-full space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Full Name"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 text-sm font-semibold mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                placeholder="Your Message"
                className="w-full px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </Gutter>
  );
}
