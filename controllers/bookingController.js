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
export const getOneBooking = async (req, res) => {
  try {
    const id = req.params.id;
    const book = await Booking.findById(id);

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
    const books = await Booking.find({ status: "active" });

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

//get booking by pending
export const getTourBookingPending = async (req, res) => {
  try {
    const books = await Booking.find({ status: "pending" });
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

//get booking by rejected
export const getTourBookingRejected = async (req, res) => {
  try {
    const books = await Booking.find({ status: "rejected" });
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

//get booking by cancelled
export const getTourBookingCancelled = async (req, res) => {
  try {
    const books = await Booking.find({ status: "cancelled" });
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

export const cancellationRequest = async (req, res) => {
  const bookingId = req.params.id;
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, req.body);
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
  try {
    const bookingId = req.params.id;
    const updatedBooking = await Booking.findByIdAndUpdate(bookingId, req.body);
    res.status(200).json({
      success: true,
      message: "Successful",
      data: updatedBooking,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "internal server error",
    });
  }
};
