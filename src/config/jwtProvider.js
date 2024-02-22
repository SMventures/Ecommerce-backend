require('dotenv').config();
const jwt = require('jsonwebtoken');
const SECRET_KEY = process.env.SECRET_KEY;

const generateToken = (userId) => {

    const payload = { userId };

    // Create JWT token with header, payload, and signature
    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '48h' });
    return token;
}

const getUserIdFromToken = (token) => {
    const decodedToken = jwt.verify(token, SECRET_KEY);
    return decodedToken.userId;
}

module.exports = { generateToken, getUserIdFromToken };
