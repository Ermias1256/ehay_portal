import Mongoose from "mongoose";
import UserLog from "../models/userLog.js";

export const getUserLog = async (req, res) => {
  const { id } = req.params;

  try {
    const userLog = await UserLog.findById(id);

    res.status(200).json(userLog);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserLogs = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await UserLog.countDocuments({});

    const userLogs = await UserLog.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: userLogs,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getUserLogsBySearch = async (req, res) => {
  const { searchQuery, tags } = req.query;
  try {
    const title = new RegExp(searchQuery, "i");

    const userLogs = await UserLog.find({
      $or: [{ title }, { tags: { $in: tags.split(",") } }],
    });

    res.json({ data: userLogs });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUserLog = async (req, res) => {
  const userLog = req.body;

  const newUserLog = new UserLog({
    ...userLog,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newUserLog.save();

    res.status(201).json(newUserLog);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
