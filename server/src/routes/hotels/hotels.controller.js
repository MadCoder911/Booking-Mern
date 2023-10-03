const Hotel = require("../../models/hotels");
//
//
async function createHotel(req, res, next) {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (err) {
    next(err);
  }
}
//
//
async function putHotel(req, res) {
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
}
//
//
async function deleteHotel(req, res) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted" });
  } catch (error) {}
}
//
//
async function getHotel(req, res) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      res.status(400).json({ message: "not found" });
    }
    res.status(200).json(hotel);
  } catch (error) {}
}
//
//
async function getAllHotels(req, res) {
  try {
    const hotels = await Hotel.find({});
    if (!hotels || hotels.length < 1) {
      res.status(400).json({ message: "No hotels found" });
    }
    res.status(200).json(hotels);
  } catch (error) {}
}
module.exports = { createHotel, putHotel, deleteHotel, getHotel, getAllHotels };
