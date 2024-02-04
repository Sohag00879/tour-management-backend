import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verfifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
  getTourBooking,
  tourCancellationRequest,
} from "../controllers/bookingController.js";
const router = express.Router();

router.post("/", verifyUser, createBooking);
// router.get("/:id", verifyUser, getBooking);
router.get("/:id", getBooking);
// router.get("/", verifyAdmin, getAllBooking);
router.get("/", getAllBooking);
router.get("/tourBooking/:id", getTourBooking);

export default router;
