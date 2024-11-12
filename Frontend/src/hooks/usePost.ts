import { getPost } from "@/api/getPost";
import { useQuery } from "@tanstack/react-query";

export const usePost = (id: string) =>
  useQuery({ queryKey: ["post", id], queryFn: () => getPost(id) });
