import express from "express";
import {
  signin,
  signup,
  verifySignup,
  signupWelcome,
  getUsers,
} from "../controllers/user.js";

import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/signin", signin);
router.post("/signup", signup);
router.post("/verifySignup", verifySignup);
router.post("/signupWelcome", signupWelcome);
router.get("/", auth, getUsers);

export default router;
