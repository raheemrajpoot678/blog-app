import { apiUrl } from "@/pages/Login";
import axios from "axios";

export const getPost = async (id: string) => {
  try {
    const response = await axios.get(`${apiUrl}/api/posts/${id}`);
    if (response.data.status === "success") return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
