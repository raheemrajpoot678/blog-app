import { getPosts } from "@/api/getPosts";
import { useQuery } from "@tanstack/react-query";

export const usePosts = () =>
  useQuery({ queryKey: ["posts"], queryFn: getPosts });
