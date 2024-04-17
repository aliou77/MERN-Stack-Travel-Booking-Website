import jwt from "jsonwebtoken"

// check the token
export const verifyToken = (req, res, next) =>{
    const token = req.cookies.accessToken

    if(!token) return res.status(401).json({success: false, message: "Your are not authorized to access :)"});

    // if token exists then verify it
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user)=>{
        if(err) return res.status(401).json({success: false, message: "token is invalid"});

        // if token is valid
        req.user = user;
        next();
    })
}

// check if user is authenticated
export const verifyUser = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if(req.user.id === req.params.id || req.user.role === "admin"){
            next();
        }else{
            return res.status(401).json({success: false, message: "You are not authenticated"});
        }
    })
}

// check if the user is authenticated as admin
export const verifyAdmin = (req, res, next) =>{
    verifyToken(req, res, next, ()=>{
        if(req.user.role === "admin"){
            next();
        }else{
            return res.status(401).json({success: false, message: "You are not authorized to access :)"});
        }
    })
}