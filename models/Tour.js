import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    tourStartDate: {
      type: Date,
    },
    tourDays: {
      type: Number,
    },
    price: {
      type: Number,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },
    hotelName: {
      type: String,
      required: true,
    },
    hotelAddress: {
      type: String,
      required: true,
    },
    numberOfHotelRoom: {
      type: Number,
      required: true,
    },
    hotelPhoto: {
      type: String,
      required: true,
    },
    hotelDesc: {
      type: String,
      required: true,
    },
    discount: {
      type: Number,
    },
    discountLastDate: {
      type: Date,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
    },
    busName: {
      type: String,
    },
    busPhoto: {
      type: String,
    },
    busStartLocation: {
      type: String,
    },
    busStartDate: {
      type: Date,
    },
    busDescription: {
      type: String,
    },
    // breakFast: [String],
    breakFast: {
      type: [String],
    },
    lunch: {
      type: [String],
    },
    dinner: [String],
    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);
