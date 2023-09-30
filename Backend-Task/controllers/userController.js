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

const deleteUser = async (req, res) => {};

module.exports = {
    regUser,
    getUser,
    getUsers,
    deleteUser,
};
