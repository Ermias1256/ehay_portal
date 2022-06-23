import express from "express";
import {
  getUserLog,
  getUserLogs,
  getUserLogsBySearch,
  createUserLog,
} from "../controllers/userLogs.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/search", auth, getUserLogsBySearch);
router.get("/", auth, getUserLogs);
router.get("/:id", auth, getUserLog);

router.post("/", auth, createUserLog);

export default router;
