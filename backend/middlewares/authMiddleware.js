const jwt = require("jsonwebtoken");
const User = require("../models/registerModel");
const expressAsyncHandler = require("express-async-handler");

const authMiddleware = expressAsyncHandler(async (request, response, next) => {
    const authHeader = request.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer")) {
        return response.status(401).json({ message: "No token provided or token format invalid!" });
    }

    try {
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        request.user = await User.findById(decoded.id).select("-password");

        if (!request.user) {
            return response.status(404).json({ message: "User not found!" });
        }

        next();
    } catch (err) {
        console.error("Error in authMiddleware:", err.message);
        return response.status(401).json({ message: "Not authorized, invalid token!" });
    }
});

module.exports = authMiddleware;
