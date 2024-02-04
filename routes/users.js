import express from "express";
import {
  createUser,
  deleteUser,
  getAllUser,
  getSingleUser,
  updateUser,
} from "../controllers/userController.js";
const router = express.Router();

import { verifyAdmin, verifyUser } from "../utils/verfifyToken.js";

//create user
router.post("/", createUser);
//update user
router.put("/:id", verifyUser, updateUser);

//delete user
router.delete("/:id", verifyUser, deleteUser);

//get single user
// router.get("/:id", verifyUser, getSingleUser);
router.get("/:id", getSingleUser);

//get all users
// router.get("/", verifyAdmin, getAllUser);
router.get("/", getAllUser);

export default router;
