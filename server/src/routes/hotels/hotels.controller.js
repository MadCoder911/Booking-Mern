const Hotel = require("../../models/hotels");
const createError = require("../../utils/erros");
//
//
async function createHotel(req, res, next) {
  const newHotel = new Hotel(req.body);

  try {
    const savedHotel = await newHotel.save();
    res.status(200).json(savedHotel);
  } catch (error) {
    next(error);
  }
}
//
//
async function putHotel(req, res, next) {
  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedHotel);
  } catch (error) {
    next(error);
  }
}
//
//
async function deleteHotel(req, res, next) {
  try {
    await Hotel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Hotel deleted" });
  } catch (error) {
    next(error);
  }
}
//
//
async function getHotel(req, res, next) {
  try {
    const hotel = await Hotel.findById(req.params.id);
    if (!hotel) {
      res.status(400).json({ message: "not found" });
    }
    res.status(200).json(hotel);
  } catch (error) {
    next(error);
  }
}
//
//
async function getAllHotels(req, res, next) {
  try {
    const hotels = await Hotel.find({});
    if (!hotels || hotels.length < 1) {
      res.status(400).json({ message: "No hotels found" });
    }
    res.status(200).json(hotels);
  } catch (error) {
    next(err);
  }
}
//
//
async function countByCity(req, res, next) {
  const cities = req.query.cities.split(",");

  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city });
      })
    );

    res.status(200).json(list);
  } catch (error) {
    next(err);
  }
}
module.exports = {
  createHotel,
  putHotel,
  deleteHotel,
  getHotel,
  getAllHotels,
  countByCity,
};
