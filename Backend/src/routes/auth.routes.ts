import express from "express";
import { login, logout, signUp } from "../controllers/authController";

const router = express.Router();

router.post("/register", signUp);
router.post("/login", login);
router.post("/log-out", logout);

export default router;
