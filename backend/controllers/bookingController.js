import Booking from "../models/Booking.js"

// create a new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save();
        res.status(200).json({success: true, message: "Your tour is booked", data: savedBooking, status: 200})
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to save booking"})
    }
}

// get a single booking
export const getBooking = async (req, res) => {
    const id = req.params.id
    try {
        const booking = await Booking.findById(id);
        res.status(200).json({success: true, message: "Booking found", data: booking, status: 200})
    } catch (error) {
        res.status(404).json({success: false, message: "Booking not found"})
    }
}

// get all booking
export const getAllBooking = async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json({success: true, message: "Bookings found", data: bookings, status: 200})
    } catch (error) {
        res.status(500).json({success: false, message: "failed !"})
    }
}