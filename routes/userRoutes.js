const express = require("express");
const User = require("../models/UserModel");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

router.get("/profile", (req, res) => {
  if (req.oidc.isAuthenticated()) {
    res.json(req.oidc.user);
  } else {
    res.status(401).json({ message: "Not authenticated" });
  }
});

module.exports = router;
