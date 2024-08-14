import express from "express";
import {
  createBlogPost,
  deleteBlogPost,
  getBlogPosts,
  updateBlogPost,
  addCommentToBlog,
  addCommentToBlogV2,
  getCommentByPost,
} from "../controllers/blogPostController.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/get/all", getBlogPosts);
router.post("/create", createBlogPost);
router.patch("/update/:id", auth, updateBlogPost);
router.delete("/delete/:id", auth, deleteBlogPost);
router.put("/comment/add", addCommentToBlog);
router.put("/comment/add/v2", addCommentToBlogV2);
router.get("/comment/get/byId", getCommentByPost);

export default router;
