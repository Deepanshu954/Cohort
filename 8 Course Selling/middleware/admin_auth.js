const JWT = require("jsonwebtoken");
const { JWT_ADMIN_PASSWORD } = require("../config");

async function admin_auth(req, res, next) {
  const token = req.headers.token;

  if (!token) {
    return res.status(400).json({
      msg: "Token Not Available",
    });
  }

  try {
    const decoded = JWT.verify(token, JWT_ADMIN_PASSWORD);

    req.userId = decoded.id;
    next();
  } catch (e) {
    console.error("Token Verification Failed:", e.message);
    return res.status(401).json({
      msg: "Invalid or Expired Token",
    });
  }
}

module.exports = {
  admin_auth,
};