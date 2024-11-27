const jwt = require('jsonwebtoken');

const secret_key = process.env.JWT_SECRET_KEY;

const signPayload = (payload) => jwt.sign(payload, secret_key);
const verifyToken = (token) => jwt.verify(token, secret_key);

module.exports = {
    signPayload,
    verifyToken
}