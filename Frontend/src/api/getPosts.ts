import { apiUrl } from "@/pages/Login";
import axios from "axios";

export const getPosts = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/posts`);
    if (response.data.status === "success") return response.data.data;
  } catch (error) {
    console.log(error);
  }
};
