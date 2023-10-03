const express = require("express");
const hotelsRouter = express.Router();

const {
  createHotel,
  putHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
} = require("./hotels.controller");
//Get all hotels
hotelsRouter.get("/hotels", getAllHotels);
//Get Hotel
hotelsRouter.get("/hotels/:id", getHotel);
//Create Hotel
hotelsRouter.post("/hotels", createHotel);
//Update Hotel
hotelsRouter.put("/hotels/:id", putHotel);
//Delte Hotel
hotelsRouter.delete("/hotels/:id", deleteHotel);

module.exports = hotelsRouter;
