// controusers/usersController.js
const users = require('../models/users');

// Get All users
const getAllusers = (req, res) => {
  res.json(users);
};

// Get Single user by ID
const getUserById = (req, res) => {
  const found = users.some((user) => user.id ===parseInt(req.params.id));

  if (found) {
    res.json(users.filter((user) => user.id ===parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

let nextUserId = 10;

// Create a New user
const createUser = (req, res) => {
  const newUser = {
    id: nextUserId,
    ...req.body,
  };
 nextUserId++;

  if (!newUser.name || !newUser.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  users.push(newUser);
  res.json(users);
};

// Update user by ID
const updateUser = (req, res) => {
  const found = users.some((user) => user.id ===parseInt(req.params.id));

  if (found) {
    users.forEach((user, i) => {
      if (user.id ===parseInt(req.params.id)) {
        users[i] = { ...user, ...req.body };
        res.json({ msg: 'user updated', user: users[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

// Delete user by ID
const deleteUser = (req, res) => {
  const found = users.some((user) => user.id ===parseInt(req.params.id));

  if (found) {
    const updatedusers = users.filter((user) => user.id !==parseInt(req.params.id));
    res.json({ msg: 'user deleted', users: updatedusers });
  } else {
    res.status(400).json({ msg: `No user with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllusers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};