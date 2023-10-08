const mongoose = require("mongoose");
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: [{ type: [Date] }] }],
    photos: {
      type: [String],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Room", RoomSchema);
