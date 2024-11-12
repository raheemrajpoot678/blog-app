import express from "express";
import {
  createPost,
  deletePost,
  getAllPosts,
  getPost,
  updatePost,
} from "../controllers/postController";
import { adminOnly } from "../middlewares/adminOnly";
import { protect } from "../middlewares/protect";

const router = express.Router();

router.get("/", getAllPosts);
router.get("/:id", getPost);

// Only Admin
router.use(protect, adminOnly);
router.post("/", createPost);
router.route("/:id").put(updatePost).delete(deletePost);

export default router;
