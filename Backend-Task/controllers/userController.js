const { validationResult } = require("express-validator");
const { User } = require("../model/User");

const regUser = async (req, res) => {
    const { name, email, branch, phoneNo } = req.body;

    // Input validation
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const errorsArray = errors.array();
        const emailError = errorsArray.find((err) => err.path === "email");
        const phoneNoError = errorsArray.find((err) => err.path === "phoneNo");

        if (emailError && !phoneNoError) {
            return res.status(422).json({
                success: false,
                status_message:
                    "wrong email format, should be in the format ....@thapar.edu",
            });
        } else if (!emailError && phoneNoError) {
            return res.status(422).json({
                success: false,
                status_message: "wrong phone number format",
            });
        } else {
            return res.status(422).json({
                success: false,
                status_message:
                    "wrong input data, check your email and phone number",
            });
        }
    }

    // check if there's a duplicate user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(409).json({
            success: false,
            status_message: "email already registered, please log in instead",
        });
    }

    const userToRegister = new User({
        name,
        email,
        branch,
        phoneNo,
    });

    try {
        await userToRegister.save();
        res.status(201).json({
            success: true,
            status_message: "user created",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            status_message: "internal server error",
        });
    }
};

const getUser = async (req, res) => {};

const getUsers = async (req, res) => {};

const deleteUser = async (req, res) => {
  const { email } = req.body;

  try {
    // Find and delete the user by their email
    const deletedUser = await User.findOneAndDelete({ email });

    //Cannot find user in DB
    if (!deletedUser) {
      return res.status(404).json({
        success: false,
        status_message: "User not found",
      });
    }
    //Successfully deleted user
    return res.status(200).json({
      success: true,
      status_message: "User deleted successfully",
    });
  } catch (error) {
    console.error("Error deleting user", error);

    return res.status(500).json({
      success: false,
      status_message: "Internal server error",
    });
  }
};

module.exports = {
    regUser,
    getUser,
    getUsers,
    deleteUser,
};
