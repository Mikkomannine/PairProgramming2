// controllers/toursController.js
const tours = require('../models/tours');

// Get All tours
const getAllTours = (req, res) => {
  res.json(tours);
};

// Get Single tour by ID
const getTourById = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    res.json(tours.filter((tour) => tour.id === parseInt(req.params.id)));
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

let nextTourId = 10;

// Create a New tour
const createTour = (req, res) => {
  const newTour = {
    id: nextTourId,
    ...req.body,
  };
  nextTourId++;

  if (!newTour.name || !newTour.email) {
    return res.status(400).json({ msg: 'Please include a name and email' });
  }

  tours.push(newTour);
  res.json(tours);
};

// Update tour by ID
const updateTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    tours.forEach((tour, i) => {
      if (tour.id === parseInt(req.params.id)) {
        tours[i] = { ...tour, ...req.body };
        res.json({ msg: 'tour updated', tour: tours[i] });
      }
    });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

// Delete tour by ID
const deleteTour = (req, res) => {
  const found = tours.some((tour) => tour.id === parseInt(req.params.id));

  if (found) {
    const updatedtours = tours.filter((tour) => tour.id !== parseInt(req.params.id));
    res.json({ msg: 'tour deleted', tours: updatedtours });
  } else {
    res.status(400).json({ msg: `No tour with the id of ${req.params.id}` });
  }
};

module.exports = {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
};