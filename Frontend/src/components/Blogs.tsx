import BlogCard from "./BlogCard";
import Gutter from "./Gutter";

export default function Blogs() {
  // Dummy data for blogs
  const blogData = [
    {
      title: "Exploring New Horizons in Technology",
      content:
        "In this blog post, we dive into the latest trends and insights shaping the tech industry. From AI advancements to sustainable practices, we cover it all...",
      author: "John Doe",
    },
    {
      title: "The Art of Minimalist Living",
      content:
        "Discover how embracing a minimalist lifestyle can lead to greater happiness, clarity, and focus in your daily life.",
      author: "Jane Smith",
    },
    {
      title: "Top 10 Travel Destinations for 2024",
      content:
        "From exotic beaches to bustling cities, these are the must-see travel spots for the coming year.",
      author: "Alex Brown",
    },
    {
      title: "Mastering the Basics of Cooking",
      content:
        "Cooking can be simple and fun. Here are the foundational skills every home chef should master to create delicious meals.",
      author: "Chris Lee",
    },
    {
      title: "Mindfulness and Mental Health",
      content:
        "A comprehensive guide to incorporating mindfulness practices into daily routines to improve mental well-being.",
      author: "Patricia Green",
    },
    {
      title: "Building Financial Independence",
      content:
        "Learn the steps to financial freedom and how to manage your finances effectively.",
      author: "Michael Scott",
    },
  ];

  return (
    <Gutter className="pb-12">
      <h2 className="text-2xl font-semibold py-8 font-mono text-center relative">
        --- Our Blogs ---
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {blogData.map((blog, index) => (
          <BlogCard
            key={index}
            title={blog.title}
            content={blog.content}
            author={blog.author}
          />
        ))}
      </div>
    </Gutter>
  );
}
