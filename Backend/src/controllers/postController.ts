import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { AppError } from "../utils/appError";
import Post from "../models/post.model";

export const getAllPosts = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const posts = await Post.find().populate({
      path: "author",
      select: "username",
    });
    res.status(200).json({
      status: "success",
      results: posts.length,
      data: posts,
    });
  }
);
export const getPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const post = await Post.findById(id).populate({
      path: "author",
      select: "username",
    });
    if (!post) return next(new AppError("Post not found with id ", 404));
    res.status(200).json({
      status: "success",
      data: post,
    });
  }
);

// Admin Only
export const createPost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, content } = req.body;
    if (!title || !content) {
      return next(
        new AppError(
          "Both title and content are required to create a post.",
          400
        )
      );
    }
    const newPost = await Post.create({
      title,
      content,
      author: req.user._id,
    });
    res.status(201).json({
      status: "success",
      message: "Post created successfully",
      data: newPost,
    });
  }
);
export const updatePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const { title, content } = req.body;
    if (!title || !content) {
      return next(
        new AppError(
          "Both title and content are required to update the post.",
          400
        )
      );
    }
    const updatedPost = await Post.findByIdAndUpdate(
      id,
      {
        title,
        content,
      },
      { new: true }
    );
    if (!updatedPost) {
      return next(new AppError("No post found with the provided ID.", 404));
    }
    res.status(201).json({
      status: "success",
      message: "Post updated successfully",
      data: updatedPost,
    });
  }
);

export const deletePost = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return next(new AppError("No post found with that ID to delete.", 404));
    }
    res.status(204).json({
      status: "success",
      message: "Post deleted successfully",
    });
  }
);
