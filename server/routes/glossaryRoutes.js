// Import Express library to create router
const express = require('express');
const router = express.Router();

// Import the GlossaryTerm model to interact with the database
const GlossaryTerm = require('../models/glossaryTerm');

// @route   GET /api/glossary
// @desc    Get all glossary terms
// @access  Public
// Fetch all glossary terms from the database --> "GlossaryTerm.find()"
// Send them back as JSON response --> " res.json(terms)"
// If an error occurs, send status 500 with error message --> "res.status(500).json"
router.get('/', async (req, res) => {
  try { 
    const terms = await GlossaryTerm.find(); 
    res.json(terms);
  } catch (err) { 
    res.status(500).json({ message: err.message }); 
  }
});

// Export the router to be used in server.js
module.exports = router;
