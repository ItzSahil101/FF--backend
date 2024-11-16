const express = require("express");
const router = express.Router();
const userModel = require("../models/userModel");

router.post("/", async (req, res) => {
  const { num, pass } = req.body;

  try {
    let newUser = await userModel.create({
      num,
      pass,
    });
    res.status(200).json({ msg: "Top-Up sucess"});
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
