import * as userService from "../services/userService.js";

const getAllUsers = (req, res) => {
  res.send(userService.getAllUsers());
};

const addUser = (req, res) => {
  res.send(userService.addUser());
};

const getUserById = (req, res) => {
  const userId = req.params.id;
  res.send(userService.getUserById(userId));
};

export { getAllUsers, addUser, getUserById };
