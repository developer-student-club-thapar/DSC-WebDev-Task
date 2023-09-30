const { body } = require("express-validator")

exports.signUpValidator = [
  body("email").isEmail({host_whitelist: ["thapar.edu"]}).normalizeEmail(),
  body("phoneNo").isMobilePhone("any"),
]