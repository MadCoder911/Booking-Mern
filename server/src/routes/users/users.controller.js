//
//Get all users
async function getAllUsers(req, res, next) {
  try {
    const user = await User.find({});
    res.status(200).json(user);
  } catch (error) {
    next(err);
  }
}
//
//
//Get user
async function getUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
}
//
//
//Update user
async function updateUser(req, res, next) {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}
//
//
//Delete user
async function deleteUser(req, res, next) {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    next(error);
  }
}

module.exports = { getAllUsers, getUser, updateUser, deleteUser };
