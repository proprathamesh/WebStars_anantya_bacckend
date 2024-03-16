import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};

export default authUser;

// import auth from '../middlewares/auth.js'
