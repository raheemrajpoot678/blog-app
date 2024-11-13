import { createPost } from "@/api/createPost";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const useCreatePost = () =>
  useMutation<string, AxiosError, { title: string; content: string }>({
    mutationKey: ["createPost"],
    mutationFn: ({ title, content }) => createPost(title, content),
  });
