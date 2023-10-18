const express = require("express");
const cookieParser = require("cookie-parser");
const authRouter = require("./routes/auth/auth.router");
const usersRouter = require("./routes/users/users.router");
const hotelsRouter = require("./routes/hotels/hotels.router");
const roomsRouter = require("./routes/rooms/rooms.router");
const cors = require("cors");
//
//
const app = express();
app.use(
  cors({
    origin: ["http://localhost:3002", "https://booking-mern.vercel.app/"],
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(authRouter);
app.use(usersRouter);
app.use(hotelsRouter);
app.use(roomsRouter);
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong !";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
module.exports = app;
