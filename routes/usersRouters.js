

const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();

// Get All Users
router.get('/', usersController.getAllusers);

// Get Single User by ID
router.get('/:id', usersController.getUserById);

// Create a New User
router.post('/', usersController.createUser);

// Update User by ID
router.put('/:id', usersController.updateUser);

// Delete User by ID
router.delete('/:id', usersController.deleteUser);

module.exports = router;