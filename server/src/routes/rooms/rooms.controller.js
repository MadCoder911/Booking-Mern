const Room = require("../../models/room");
const Hotel = require("../../models/hotels");
const createError = require("../../utils/erros");

async function createRoom(req, res, next) {
  const hotelId = req.params.id;

  const newRoom = new Room(req.body);

  try {
    const savedRoom = await newRoom.save();
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $push: { rooms: savedRoom._id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json(savedRoom);
  } catch (error) {
    next(error);
  }
}
//
//
async function putRoom(req, res, next) {
  try {
    const updatedRoom = await Room.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedRoom);
  } catch (error) {
    next(error);
  }
}
//
//
async function deleteRoom(req, res, next) {
  const hotelId = req.params.hotelid;

  try {
    await Room.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(hotelId, {
        $pull: { rooms: req.params.id },
      });
    } catch (error) {
      next(error);
    }
    res.status(200).json({ message: "Room deleted" });
  } catch (error) {
    next(error);
  }
}
//
//
async function getRoom(req, res, next) {
  try {
    const room = await Room.findById(req.params.id);
    if (!room) {
      res.status(400).json({ message: "not found" });
    }
    res.status(200).json(room);
  } catch (error) {
    next(error);
  }
}
//
//
async function getAllRooms(req, res, next) {
  const failed = true;
  if (failed) {
    next(createError(401, "You are not authenticated"));
    return;
  }
  try {
    const rooms = await Room.find({});
    if (!rooms || rooms.length < 1) {
      res.status(400).json({ message: "No rooms found" });
    }
    res.status(200).json(rooms);
  } catch (error) {
    next(err);
  }
}

module.exports = { createRoom, putRoom, getRoom, deleteRoom, getAllRooms };
