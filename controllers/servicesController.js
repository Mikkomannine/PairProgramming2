// controllers/servicesController.js
const services = require('../models/services');

// Get All services
const getAllServices = (req, res) => {
  res.json(services);
};

// Get Single service by ID
const getServiceById = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    res.json(services.filter((service) => service.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

let nextServiceId = 10;

// Create a New service
const createService = (req, res) => {
  const newservice = {
    id: nextServiceId,
    ...req.body,
  };
  nextServiceId++;

  if (!newservice.name || !newservice.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  services.push(newservice);
  res.json(services);
};

// Update service by ID
const updateService = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    services.forEach((service, i) => {
      if (service.id === parseInt(req.params.id)) {
        services[i] = { ...service, ...req.body };
        res.json({ msg: 'service updated', service: services[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

// Delete service by ID
const deleteService = (req, res) => {
  const found = services.some((service) => service.id === parseInt(req.params.id));

  if (found) {
    const updatedservices = services.filter((service) => service.id !== parseInt(req.params.id));
    res.json({ msg: 'service deleted', services: updatedservices });
  } else {
    res.status(400).json({ msg: `No service with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllServices,
  getServiceById,
  createService,
  updateService,
  deleteService,
};