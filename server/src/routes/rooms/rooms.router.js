const express = require("express");
const roomsRouter = express.Router();
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../../utils/verifyToken");
const {
  createRoom,
  putRoom,
  getRoom,
  deleteRoom,
  getAllRooms,
} = require("../rooms/rooms.controller");
//Get all rooms
roomsRouter.get("/rooms", getAllRooms);
//Get Hotel
roomsRouter.get("/rooms/:id", getRoom);
//Create Hotel
roomsRouter.post("/rooms/:id", verifyAdmin, createRoom);
//Update Hotel
roomsRouter.put("/rooms/:id", verifyAdmin, putRoom);
//Delte Hotel
roomsRouter.delete("/rooms/:id/hotelid", verifyAdmin, deleteRoom);

module.exports = roomsRouter;
