import express from "express";
import {
  getAppRouteSetting,
  getAppRouteSettings,
  getAppRouteSettingsBySearch,
  createAppRouteSetting,
  updateAppRouteSetting,
  deleteAppRouteSetting,
} from "../controllers/appRouteSettings.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getAppRouteSettingsBySearch);
router.get("/", getAppRouteSettings);
router.get("/:id", getAppRouteSetting);

router.post("/", auth, createAppRouteSetting);
router.patch("/:id", auth, updateAppRouteSetting);
router.delete("/:id", auth, deleteAppRouteSetting);

export default router;
