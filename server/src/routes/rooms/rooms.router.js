const express = require("express");
const roomsRouter = express.Router();

roomsRouter.get("/rooms", (req, res) => {
  res.json({ msg: "Rooms" });
});

module.exports = roomsRouter;
