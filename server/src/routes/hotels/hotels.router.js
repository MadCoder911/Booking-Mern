const express = require("express");
const hotelsRouter = express.Router();

const {
  createHotel,
  putHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
} = require("./hotels.controller");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../../utils/verifyToken");
//Get all hotels
hotelsRouter.get("/hotels", getAllHotels);
//Get number of hotels in cities
hotelsRouter.get("/hotels/countByCity", countByCity);
// hotelsRouter.get("/hotels/countByType", getAllHotels);
//Get Hotel
hotelsRouter.get("/hotels/:id", getHotel);
//Create Hotel
hotelsRouter.post("/hotels", verifyAdmin, createHotel);
//Update Hotel
hotelsRouter.put("/hotels/:id", verifyAdmin, putHotel);
//Delte Hotel
hotelsRouter.delete("/hotels/:id", verifyAdmin, deleteHotel);

module.exports = hotelsRouter;
