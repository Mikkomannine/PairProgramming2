
const express = require('express');
const toursController = require('../controllers/toursController');
const router = express.Router();

// Get All Tours
router.get('/', toursController.getAllTours);

// Get Single Tour by ID
router.get('/:id', toursController.getTourById);

// Create a New Tour
router.post('/', toursController.createTour);

// Update Tour by ID
router.put('/:id', toursController.updateTour);

// Delete Tour by ID
router.delete('/:id', toursController.deleteTour);

module.exports = router;