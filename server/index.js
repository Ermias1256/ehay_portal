import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./routes/users.js";
import userLogRoutes from "./routes/userLogs.js";
import lookupSettingRoutes from "./routes/lookupSettings.js";
import appRouteSettingRoutes from "./routes/appRouteSettings.js";

const app = express();
dotenv.config();

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/user", userRoutes);
app.use("/userlogs", userLogRoutes);
app.use("/approutesettings", appRouteSettingRoutes);
app.use("/lookupsettings", lookupSettingRoutes);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.CONNECTION_URL_LOCAL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))
  )
  .catch((error) => console.log(error.message));
//to avoid warning in the console warning
//mongoose.set("find", false);
