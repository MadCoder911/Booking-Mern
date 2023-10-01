const express = require("express");
const dotenv = require("dotenv");
const app = express();
const { mongoConnect } = require("./services/mongo");
const startServer = async () => {
  await mongoConnect();
  app.listen(8000, () => {
    console.log("Server started at port 8000");
  });
};
startServer();
