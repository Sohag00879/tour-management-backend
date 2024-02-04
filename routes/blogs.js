import express from "express";
import { verifyAdmin } from "../utils/verfifyToken.js";
import {
  allBlogs,
  createBlog,
  deleteBlog,
} from "../controllers/blogsController.js";
const router = express.Router();

//create new blog
router.post("/", createBlog);

//delete tour
router.delete("/:id", deleteBlog);

//get all tours
router.get("/", allBlogs);

export default router;
