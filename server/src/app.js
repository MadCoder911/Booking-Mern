const express = require("express");
const authRouter = require("./routes/auth/auth.router");
const usersRouter = require("./routes/users/users.router");
const hotelsRouter = require("./routes/hotels/hotels.router");

const roomsRouter = require("./routes/rooms/rooms.router");
const app = express();

app.use(express.json());
app.use(authRouter);
app.use(usersRouter);
app.use(hotelsRouter);
app.use(roomsRouter);

module.exports = app;
