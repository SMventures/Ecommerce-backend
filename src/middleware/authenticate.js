const jwtProvider = require("../config/jwtProvider");
const userService = require("../services/user.service");

const authenticate = async (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization;
        
        if (!authorizationHeader || !authorizationHeader.startsWith('Bearer ')) {
            return res.status(401).send({ message: "Unauthorized: Missing or invalid token" });
        }

        const token = authorizationHeader.split(' ')[1];

        const userId = jwtProvider.getUserIdFromToken(token);
        if (!userId) {
            return res.status(401).send({ message: "Unauthorized: Invalid token" });
        }

        const user = await userService.findUserById(userId);
        if (!user) {
            return res.status(401).send({ message: "Unauthorized: User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        return res.status(500).send({ error: "Internal Server Error" });
    }
};

module.exports = authenticate;
