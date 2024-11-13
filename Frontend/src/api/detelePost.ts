import { apiUrl } from "@/pages/Login";
import axios from "axios";

export const deletePost = async (id: string) => {
  try {
    const res = await axios.delete(`${apiUrl}/api/posts/${id}`, {
      withCredentials: true,
    });
    console.log(res);
    if (res.data.status === "success") {
      return res.data.data;
    }
  } catch (error) {
    throw error;
  }
};
