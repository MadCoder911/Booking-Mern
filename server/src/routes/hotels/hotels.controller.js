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
  const { min, max, limit, ...others } = req.query;
  console.log(req.query);
  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min | 1, $lt: max | 9999 },
    }).limit(limit);
    if (!hotels || hotels.length < 1) {
      res.status(400).json({ message: "No hotels found" });
    }
    res.status(200).json(hotels);
  } catch (error) {
    next(error);
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
async function countByType(req, res, next) {
  try {
    const hotelCount = await Hotel.countDocuments({ type: "hotel" });
    const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
    const resortCount = await Hotel.countDocuments({ type: "resort" });
    const villaCount = await Hotel.countDocuments({ type: "villa" });
    const cabinCount = await Hotel.countDocuments({ type: "cabin" });

    res.status(200).json([
      { type: "hotel", count: hotelCount },
      { type: "apartments", count: apartmentCount },
      { type: "resorts", count: resortCount },
      { type: "villas", count: villaCount },
      { type: "cabins", count: cabinCount },
    ]);
  } catch (err) {
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
  countByType,
};
