import { apiUrl } from "@/pages/Login";
import axios from "axios";

export const createPost = async (
  title: string,
  content: string
): Promise<string> => {
  try {
    const response = await axios.post(
      `${apiUrl}/api/posts`,
      { title, content },
      { withCredentials: true }
    );
    if (response.data.status === "success") {
      return response.data.data;
    } else {
      throw new Error("Post creation failed");
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Axios error:", error.response?.data || error.message);
    } else {
      console.error("Unexpected error:", error);
    }
    throw error;
  }
};
