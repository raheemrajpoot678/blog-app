import { apiUrl } from "@/pages/Login";
import axios from "axios";

export type Data = {
  title: string;
  content: string;
};

export const updatePost = async (id: string, data: Data) => {
  try {
    const res = await axios.put(`${apiUrl}/api/posts/${id}`, data, {
      withCredentials: true,
    });
    if (res.data.status === "success") {
      return res.data.data;
    }
  } catch (error) {
    throw error;
  }
};
