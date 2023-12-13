import { Router } from "express";
import { createPost, dislikePost, likePost } from "../comtrollers/post.controller.js";

const router = Router();

router.post("/posts/create-post", createPost);
router.get("/posts/like-post/:postId", likePost);
router.get("/posts/dislike-post/:postId", dislikePost);

export default router;
