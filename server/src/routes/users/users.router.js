const express = require("express");
const usersRouter = express.Router();

usersRouter.get("/users", (req, res) => {
  res.json({ msg: "Users" });
});

module.exports = usersRouter;
