import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  id: { type: String },
  emailVerified: {
    type: Boolean,
    default: false,
  },
  verificationCode: {
    type: String,
    default: "",
  },
  allowedRoles: {
    //1001 - Admin, 1002 - Customer, 1003 - Merchant
    type: [String],
    default: ["1000"],
  },
});

const User = mongoose.model("User", userSchema);

export default User;
