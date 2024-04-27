import Review from "../models/Review.js";
import Tour from "../models/Tour.js";


export const createReview = async (req, res) =>{
    const tourId = req.params.tourId;
    const newReview = new Review({...req.body})

    try {
        const savedReview = await newReview.save();

        // after creating a new review then update the reviews array of the Tour
        await Tour.findByIdAndUpdate(tourId, {
            $push: {reviews: savedReview._id},
        })

        res.status(200).json({success: true, message: "Review submitted", data: savedReview, status: 200})

    } catch (error) {
        // res.status(500).json({success: false, message: error}) 
        res.status(500).json({success: false, message: "Failed to submit the review"})
    }
}