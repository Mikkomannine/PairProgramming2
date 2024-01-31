
const express = require('express');
const servicesController = require('../controllers/servicesController');
const router = express.Router();

// Get All Services
router.get('/', servicesController.getAllServices);

// Get Single Service by ID
router.get('/:id', servicesController.getServiceById);

// Create a New Service
router.post('/', servicesController.createService);

// Update Service by ID
router.put('/:id', servicesController.updateService);

// Delete Service by ID
router.delete('/:id', servicesController.deleteService);

module.exports = router;