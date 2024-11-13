import { deletePost } from "@/api/detelePost";
import { QueryClient, useMutation } from "@tanstack/react-query";

export const useDeletePost = () => {
  const queryClient = new QueryClient();
  return useMutation({
    mutationFn: deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });
};
