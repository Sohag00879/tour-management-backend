import Booking from "../models/Booking.js";

//create a booking
export const createBooking = async (req, res) => {
  const newBooking = new Booking(req.body);
  try {
    const savedBooking = await newBooking.save();
    res.status(200).json({
      success: true,
      message: "Your tour is booked",
      data: savedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

// get single booking
export const getBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const book = await Booking.find({ userId: id });

    res.status(200).json({
      success: true,
      message: "Successfully fetched  booking",
      data: book,
    });
  } catch (err) {
    res.status(404).json({
      success: false,
      message: "Not Found",
    });
  }
};

// get all booking
export const getAllBooking = async (req, res) => {
  try {
    const books = await Booking.find();

    res.status(200).json({
      success: true,
      message: "Successfully fetched  booking",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

//self
export const getTourBooking = async (req, res) => {
  const id = req.params.id;
  try {
    const books = await Booking.find({ tourId: id });
    res.status(200).json({
      success: true,
      message: "Successfully fetched  booking",
      data: books,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

//cancelletion request

export const tourCancellationRequest = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      {
        $set: {
          "cancellation.status": "pending",
          "cancellation.requestedBy": req.user._id,
        },
      },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: "Cancellation requested successfully",
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};

// Admin Confirm/Reject Cancellation
export const confirmCancellation = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const { bookingId } = req.params;
    const { action } = req.body;

    const updateFields =
      action === "confirm"
        ? {
            "cancellation.status": "confirmed",
            "cancellation.confirmedBy": req.user._id,
          }
        : {
            "cancellation.status": "cancelled",
            "cancellation.confirmedBy": req.user._id,
          };

    const updatedBooking = await Booking.findByIdAndUpdate(
      bookingId,
      { $set: updateFields },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: `Cancellation ${
        action === "confirm" ? "confirmed" : "rejected"
      } successfully`,
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
