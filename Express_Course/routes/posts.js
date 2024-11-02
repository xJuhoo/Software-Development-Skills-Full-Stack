import express from "express";
import {
    getPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
} from '../controllers/postController.js';

const router = express.Router();

// Get all posts
router.get("/", getPosts);

// Get a single post
router.get("/:id", getPost);

// Create a new post
router.post("/", createPost);

// Update a Post
router.put("/:id", updatePost);

// Delete a Post
router.delete("/:id", deletePost);

export default router;
