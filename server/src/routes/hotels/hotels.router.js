const express = require("express");
const hotelsRouter = express.Router();
const Hotel = require("../../models/hotels");
hotelsRouter.get("/hotels", (req, res) => {
  res.json({ msg: "test" });
});
//
//Create Hotel
hotelsRouter.post("/hotels", async (req, res) => {
  const newHotel = new Hotel(req.body);
  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {}
});
//Update Hotel
hotelsRouter.put("/hotels/:id", async (req, res) => {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {}
});
module.exports = hotelsRouter;
