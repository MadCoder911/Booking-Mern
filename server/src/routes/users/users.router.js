const express = require("express");
const usersRouter = express.Router();
const {
  getAllUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("./users.controller");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../../utils/verifyToken");

// usersRouter.get("/users/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });
// usersRouter.get("/users/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account");
// });
// usersRouter.get("/users/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello , this user is an admin.");
// });
usersRouter.get("/users", verifyAdmin, getAllUsers);
usersRouter.get("/users/:id", verifyUser, getUser);
usersRouter.put("/users/:id", verifyUser, updateUser);
usersRouter.delete("/users/:id", verifyUser, deleteUser);

module.exports = usersRouter;
