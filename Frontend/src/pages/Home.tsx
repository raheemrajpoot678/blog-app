import Blogs from "@/components/Blogs";
import Hero from "@/components/Hero";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Outlet />
      <Hero />
      <Blogs />
    </>
  );
}
