const { User } = require("../models/index");

function authorize(req, res, next) {
  try {
    if(req.user.role === 'admin'){
      next()
    } else {
      throw {
        name: "customError",
        message: "Unauthorized account",
        status: 401
      }
    }
  } catch (error) {
    next(error);
  }
}

module.exports = authorize ;