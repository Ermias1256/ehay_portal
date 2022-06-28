import express from "express";
import {
  getLookupSetting,
  getLookupSettings,
  getLookupSettingsBySearch,
  createLookupSetting,
  updateLookupSetting,
  deleteLookupSetting,
} from "../controllers/lookupSettings.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", getLookupSettingsBySearch);
router.get("/", getLookupSettings);
router.get("/:id", getLookupSetting);

router.post("/", auth, createLookupSetting);
router.patch("/:id", auth, updateLookupSetting);
router.delete("/:id", auth, deleteLookupSetting);

export default router;
