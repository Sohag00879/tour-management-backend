import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    tourId: {
      type: mongoose.Types.ObjectId,
      ref: "Tour",
    },
    userId: {
      type: String,
    },
    userEmail: {
      type: String,
    },
    tourName: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    guestSize: {
      type: Number,
      required: true,
    },
    roomCategory: {
      type: String,
      required: true,
    },
    phone: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    bookAt: {
      type: Date,
      // required: true,
    },
    endDate: {
      type: Date,
    },
    status: {
      type: String,
      enum: ["active", "cancelled", "pending", "rejected"],
      default: "pending",
    },
    cancellation: {
      status: {
        type: String,
        enum: ["pending", "confirmed", "cancelled", "no action"],
        default: "no action",
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("Booking", bookingSchema);
