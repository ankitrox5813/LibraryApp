const jwt = require("jsonwebtoken");

const AK_SIGN="AKS";

const generateToken = ({ _id, type }) => {
    const token = jwt.sign({ _id, type}, AK_SIGN); 
    return token;
};

const verifyToken = (token) => {
    try {
        const payload = jwt.verify(token, AK_SIGN); 
        return { status: true, payload };
    } catch (err) {
        console.error(err);
        return { status: false, payload: undefined };
    }
};

module.exports = { generateToken, verifyToken };