import express from 'express';
import { createBlogPost, deleteBlogPost, getBlogPosts, updateBlogPost } from '../controllers/blogPostController.js';
import auth from '../middleware/auth.js';

const router = express.Router();

router.get('/getAll', getBlogPosts);
router.post('/createBlogPost', auth, createBlogPost);
router.patch('/updateBlogPost/:id', auth, updateBlogPost);
router.delete('/deleteBlogPost/:id',auth, deleteBlogPost);

export default router;