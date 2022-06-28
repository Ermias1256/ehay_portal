import Mongoose from "mongoose";
import LookupSetting from "../models/lookupSetting.js";

export const getLookupSetting = async (req, res) => {
  const { id } = req.params;

  try {
    const lookupSetting = await LookupSetting.findById(id);

    res.status(200).json(lookupSetting);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLookupSettings = async (req, res) => {
  const { page } = req.query;
  try {
    const LIMIT = 8;
    const startIndex = (Number(page) - 1) * LIMIT;
    const total = await LookupSetting.countDocuments({});

    const lookupSettings = await LookupSetting.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startIndex);

    res.status(200).json({
      data: lookupSettings,
      currentPage: Number(page),
      numberOfPages: Math.ceil(total / LIMIT),
    });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getLookupSettingsBySearch = async (req, res) => {
  const { searchQuery } = req.query;
  try {
    const name = new RegExp(searchQuery, "i");

    const lookupSettings = await LookupSetting.find({
      $or: [{ name }],
    });

    res.json({ data: lookupSettings });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createLookupSetting = async (req, res) => {
  const lookupSetting = req.body;

  const newLookupSetting = new LookupSetting({
    ...lookupSetting,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });

  try {
    await newLookupSetting.save();

    res.status(201).json(newLookupSetting);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updateLookupSetting = async (req, res) => {
  const { id: _id } = req.params;
  const lookupSetting = req.body;
  try {
    if (!Mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).send("No lookupSetting with that id.");

    const updatedLookupSetting = await LookupSetting.findByIdAndUpdate(
      _id,
      lookupSetting,
      {
        new: true,
      }
    );

    res.json(updatedLookupSetting);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deleteLookupSetting = async (req, res) => {
  const { id } = req.params;

  try {
    if (!Mongoose.Types.ObjectId.isValid(id))
      return res.status(404).send("No lookupSetting with that id");

    await LookupSetting.findByIdAndRemove(id);

    res.json({ message: "LookupSetting deleted seccessfully" });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
