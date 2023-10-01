const express = require("express");
const authRouter = express.Router();

authRouter.get("/auth", (req, res) => {
  res.json({ msg: "Auth" });
});

module.exports = authRouter;
