import User from "../models/User.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

// registration
export const register = async (req, res)=>{
    try {
        // password hash
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
            photo: req.body.photo,
        })

        await newUser.save();

        res.status(200).json({success: true, message: "Registration successful"})
        
    } catch (error) {
        res.status(500).json({success: false, message: "Failed to register. Try again !"})
    }
}

// login
export const login = async (req, res)=>{
    try {
        const email = req.body.email
        const user = await User.findOne({ email: email});

        // if user is not logged in
        if(!user) return res.status(404).json({success: false, message: "User not found"})

        // if user is logged in
        const checkPassword = await bcrypt.compare(req.body.password, user.password)

        // if password not match
        if(!checkPassword) return res.status(401).json({success: false, message: "Incorrect email or password"})
        
        const [password, role, ...rest] = user._doc

        // create jwt token
        const jwtToken = jwt.sign({id: user._id, role: user.role}, process.env.JWT_SECRET_KEY, {expiresIn: "15d"})

        // set tocken in the browser cookies and send the response to the client
        res.cookie("accessToken", jwtToken, {
            httpOnly: true, 
            expiresIn: jwtToken.expiresIn
        }).status(200).json(
            {
                success: true, 
                message: "successfully login", 
                data: {...rest},
                Token,
                role
            }
        )

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to login"})
    }
}