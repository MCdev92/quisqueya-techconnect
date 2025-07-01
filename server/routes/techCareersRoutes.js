const express = require('express');
const router = express.Router();
const TechCareer = require('../models/techCareer');

// Get all tech careers
router.get('/', async (req, res) => {
  try {
    const careers = await TechCareer.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new tech career
router.post('/', async (req, res) => {
  const newCareer = new TechCareer({
    careerName: req.body.careerName,
    description: req.body.description,
    keySkills: req.body.keySkills,
    resources: req.body.resources,
  });
  try {
    const savedCareer = await newCareer.save();
    res.status(201).json(savedCareer);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
