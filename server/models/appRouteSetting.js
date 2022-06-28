import mongoose from "mongoose";

const appRouteSettingSchema = mongoose.Schema({
  code: { type: String, required: true }, // a four digit feature code - 1001, 1002, 1003, etc
  name: { type: String, required: true }, // the label of the menu as it appears in the sidebar
  description: { type: String, required: true }, // short descrption - what it does? for who?
  category: { type: String, required: true }, // Dashboard, Quick Menu, Notifications, System
  url: { type: String, required: true }, // url from the client sided
  apiEndpoint: String, //api endpoint from the server side
  allowedRoles: {
    // list of role code who allowed to access this feature
    type: [String],
    default: [],
  },
  enabled: {
    // whether the menu should be visible to the user and functioning
    type: Boolean,
    default: true,
  },
  creator: String, // the creator of the feature - usually and admin
  createdAt: {
    // date of creation
    type: Date,
    default: new Date(),
  },
});

const AppRouteSetting = mongoose.model(
  "AppRouteSetting",
  appRouteSettingSchema
);

export default AppRouteSetting;
