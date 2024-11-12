import Blogs from "@/components/Blogs";
import { useEffect } from "react";

export default function BlogsPage() {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);
  return (
    <div className="pt-24">
      <Blogs />
    </div>
  );
}
