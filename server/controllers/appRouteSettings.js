import Mongoose from "mongoose";
import AppRouteSetting from "../models/appRouteSetting.js";

export const getAppRouteSetting = async (req, res) => {
  const { id } = req.params;

  try {
    const appRouteSetting = await AppRouteSetting.findById(id);

    res.status(200).json(appRouteSetting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAppRouteSettings = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await AppRouteSetting.countDocuments({});

    const appRouteSettings = await AppRouteSetting.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: appRouteSettings,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getAppRouteSettingsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const name = new RegExp(searchQuery, "i");

    const appRouteSettings = await AppRouteSetting.find({
      $or: [{ name }],
    });

    res.json({ data: appRouteSettings });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAppRouteSetting = async (req, res) => {
  const appRouteSetting = req.body;

  const newAppRouteSetting = new AppRouteSetting({
    ...appRouteSetting,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newAppRouteSetting.save();

    res.status(201).json(newAppRouteSetting);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateAppRouteSetting = async (req, res) => {
  const { id: _id } = req.params;
  const appRouteSetting = req.body;
  try {
    if (!Mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No appRouteSetting with that id.");

    const updatedAppRouteSetting = await AppRouteSetting.findByIdAndUpdate(
      _id,
      appRouteSetting,
      {
        new: true,
      }
    );

    res.json(updatedAppRouteSetting);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteAppRouteSetting = async (req, res) => {
  const { id } = req.params;

  try {
    if (!Mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No appRouteSetting with that id");

    await AppRouteSetting.findByIdAndRemove(id);

    res.json({ message: "AppRouteSetting deleted seccessfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
