const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const createError = require("../../utils/erros");
//
//
//Register new acc
const register = async (req, res, next) => {
  try {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hash,
    });
    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
//
//
//Login to existing acc
const KEY = process.env.JWT;
const login = async (req, res, next) => {
  console.log(req.body);
  try {
    //Check user
    const user = await User.findOne({ username: req.body.username });
    if (!user) return next(createError(404, "User not found"));

    //Check password
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) return next(createError(400, "Wrong password"));
    //Sign JWT
    const token = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT
    );
    //Respond to client
    const { password, isAdmin, ...otherDetails } = user._doc;
    //Set cookie
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json({ ...otherDetails });
  } catch (err) {
    next(err);
  }
};

module.exports = { register, login };
