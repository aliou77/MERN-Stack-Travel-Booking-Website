import Tour from "../models/Tour.js";


// create a new tour
export const createTour = async (req, res)=>{
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res
        .status(200)
        .json({
            success: true,
            message: "Tour created successfully",
            data: savedTour
        })
    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to create tour, please try again !",
        })
    }
}

// update the tour
export const updateTour = async (req, res) => {
    const id = req.params.id;
    try {
        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true});
        
        res
        .status(200)
        .json({
            success: true,
            message: "Tour successfully updated",
            data: updatedTour
        })

    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to update",
        })
    }
}

// delete the tour
export const deleteTour = async (req, res) => {
    const id = req.params.id;
    try {
        await Tour.findByIdAndDelete(id);
        
        res
        .status(200)
        .json({
            success: true,
            message: "Tour successfully deleted",
        })

    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to delete",
        })
    }
}

// get one tour
export const getOneTour = async(req, res) => {
    const id = req.params.id;
    try {
        const tour = await Tour.findById(id).populate("reviews");
        
        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            data: tour
        })

    } catch (error) {
        res
        .status(404)
        .json({
            success: false,
            message: "Tour not found",
        })
    }
}

// get all tour
export const getAllTour = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    
    try {
        // populate("reviews") will retrieve all reviews related to each tour if it got inside it, by using reviews ids inside reviews[]
        const tours = await Tour.find({}).skip(page * 8).limit(8).populate("reviews");
        
        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            count: tours.length,
            data: tours
        })

    } catch (error) {
        res
        .status(404)
        .json({
            success: false,
            message: "Not found"
        })
    }
}

// get tours from search results
export const getTourBySearch = async (req, res) => {
    const page = req.query.page ? parseInt(req.query.page) : 0;
    const city = req.query.city ? new RegExp(req.query.city, 'i') : ""
    const distance = req.query.distance ? parseInt(req.query.distance) : 0
    const maxGroupSize = req.query.maxGroupSize ? parseInt(req.query.maxGroupSize) : 0

    try {
        // $gte = >=
        const tours = await Tour.find(
            { 
                city, 
                distance: {$gte: distance}, 
                maxGroupSize: {$gte: maxGroupSize}
        }).skip(page * 8).limit(8).populate("reviews");

        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            count: tours.length,
            data: tours
        })
    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Notthig found",
        })
    }

}

// get featured tours
export const getFeaturedTours = async (req, res) => {

    try {
        const tours = await Tour.find({ featured: true }).limit(8).populate("reviews");

        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            data: tours
        })
    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Notthig found",
        })
    }
}

export const getTourCount = async (req, res) => {
    try {
        const tourCount = await Tour.estimatedDocumentCount()

        res.status(200).json({success: true, data: tourCount})
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to get tour count"})
    }
}
