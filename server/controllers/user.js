import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import { sendMailFromGmail } from "../utils/mailer.js";
import randomNumber from "../utils/randomNumber.js";

export const signin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist." });

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingUser.password
    );

    if (!isPasswordCorrect)
      return res.status(400).json({ message: "Invalid credentials." });

    if (!existingUser.emailVerified) {
      // generate verification code
      const verificationCode = randomNumber(100000, 200000);

      // update verification code
      existingUser.verificationCode = verificationCode;
      const updatedUser = await User.findByIdAndUpdate(
        existingUser._id,
        existingUser,
        {
          new: true,
        }
      );

      return res.status(200).json({ result: existingUser });
    }

    const token = jwt.sign(
      {
        email: existingUser.email,
        id: existingUser._id,
        roles: existingUser.roles,
      },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signup = async (req, res) => {
  const { email, password, confirmPassword, firstName, lastName } = req.body;

  try {
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.status(404).json({ message: "User already exists." });
    if (password !== confirmPassword)
      return res.status(404).json({ message: "Password don't match." });

    const hashedPassword = await bcrypt.hash(password, 12);

    // Generate verification code
    const verificationCode = randomNumber(100000, 200000);
    const result = await User.create({
      email,
      password: hashedPassword,
      name: `${firstName} ${lastName}`,
      verificationCode: verificationCode,
      emailVerified: false,
    });

    res.status(200).json({ result });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong." });
  }
};

export const signupWelcome = async (req, res) => {
  const { to, subject, textHTML } = req.body;

  try {
    const existingUser = await User.findOne({ to });
    if (!existingUser)
      return res.status(404).json({ message: "User does not exists." });

    sendMailFromGmail(to, subject, textHTML)
      .then((result) => console.log("Email sent...", result))
      .catch((error) => console.log(error));

    res.status(200).json({ result: existingUser });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const verifySignup = async (req, res) => {
  const { email, verificationCode } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (!existingUser)
      return res.status(404).send("No user with this email address");

    if (verificationCode !== existingUser.verificationCode)
      return res.status(404).send("Verification code not valid");

    existingUser.emailVerified = true;

    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      existingUser,
      {
        new: true,
      }
    );
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "test",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUsers = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 5;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await User.countDocuments({});

    const users = await User.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: users,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
