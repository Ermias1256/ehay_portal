import mongoose from "mongoose";

const userLogSchema = mongoose.Schema({
  userId: String,
  ipAddress: String,
  authType: String, //oAuth, jwt
  url: String, //resurce being accessed
  eventType: String, //login, CRUD (LI, CR, UP, DL, RL, RD)
  outcome: String, // Sucess, Failure (S, F)
  createdAt: {
    //timestamp
    type: Date,
    default: new Date(),
  },
});

const UserLog = mongoose.model("UserLog", userLogSchema);

export default UserLog;
