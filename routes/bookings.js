import express from "express";
import { verifyAdmin, verifyUser } from "../utils/verfifyToken.js";
import {
  cancellationRequest,
  confirmCancellation,
  createBooking,
  getAllBooking,
  getBooking,
  getOneBooking,
  getTourBooking,
  getTourBookingCancelled,
  getTourBookingPending,
  getTourBookingRejected,
} from "../controllers/bookingController.js";
const router = express.Router();
router.post("/", createBooking);
router.get("/", getAllBooking);
router.get("/tourBooking-pending", getTourBookingPending);
router.get("/tourBooking-rejected", getTourBookingRejected);
router.get("/tourBooking-cancelled", getTourBookingCancelled);
router.get("/:id", getBooking);
router.get("/tourBooking/:id", getTourBooking);
router.get("/getOneBooking/:id", getOneBooking);
router.put("/bookingCancel/users/:id", cancellationRequest);
router.put("/bookingConfirm/users/admin/:id", confirmCancellation);

export default router;
