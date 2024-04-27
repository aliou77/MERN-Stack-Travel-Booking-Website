import User from "../models/User.js";


// create a new User
export const createUser = async (req, res)=>{
    const newUser = new User(req.body);

    try {
        const savedUser = newUser.save();

        res
        .status(200)
        .json({
            success: true,
            message: "User created successfully",
            data: savedUser, 
            status: 200
        })
    } catch (error) {
        res
        .status(500)
        .json({
            success: false,
            message: "Failed to create User, please try again !",
        })
    }
}

// update the User
export const updateUser = (req, res) => {
    const id = req.params.id;
    try {
        const updatedUser = User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new: true});
        
        res
        .status(200)
        .json({
            success: true,
            message: "User successfully updated",
            data: updatedUser, 
            status: 200
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

// delete the User
export const deleteUser = (req, res) => {
    const id = req.params.id;
    try {
        User.findByIdAndDelete(id);
        
        res
        .status(200)
        .json({
            success: true,
            message: "User successfully deleted", 
            status: 200
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

// get one User
export const getOneUser = async(req, res) => {
    const id = req.params.id;
    try {
        const user = await User.findById(id);
        
        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            data: user, 
            status: 200
        })

    } catch (error) {
        res
        .status(404)
        .json({
            success: false,
            message: "User not found",
        })
    }
}

// get all User
export const getAllUser = async (req, res) => {
    
    try {
        const users = await User.find({});
        
        res
        .status(200)
        .json({
            success: true,
            message: "successful",
            data: users, 
            status: 200
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

