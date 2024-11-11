import express from "express";

const router = express.Router();

router.post("/register", (req, res, next) => {
  console.log(req.body);
  res.json({ message: "User registered successfully" });
});

export default router;
