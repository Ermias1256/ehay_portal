import mongoose from "mongoose";

const lookupSettingSchema = mongoose.Schema({
  code: { type: String, required: true }, // a four digit feature code - 1001, 1002, 1003, etc
  name: { type: String, required: true }, // the lookup name
  description: { type: String, required: true }, // short descrption - what it does? for who?
  values: [
    {
      code: String,
      value: String,
    },
  ],

  creator: String, // the creator of the feature - usually and admin
  createdAt: {
    // date of creation
    type: Date,
    default: new Date(),
  },
});

const LookupSetting = mongoose.model("LookupSetting", lookupSettingSchema);

export default LookupSetting;
