// Import dependencies
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Import routes
const glossaryRoutes = require('./routes/glossaryRoutes');

// Initialize express app
const app = express();

// Define port from environment or default to 5000
const PORT = process.env.PORT || 5000;

// Import the techCareersRoutes module, which contains all routes related to tech careers
// Use the techCareersRoutes for any requests starting with '/api/techcareers'
const techCareersRoutes = require('./routes/techCareersRoutes');
app.use('/api/techcareers', techCareersRoutes);

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse incoming JSON requests

// Routes
app.use('/api/glossary', glossaryRoutes); // API endpoint for glossary terms

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB connected successfully'))
.catch(err => console.log('❌ MongoDB connection error:', err));

// Root route for testing server status
app.get('/', (req, res) => {
  res.send('Welcome to Quisqueya TechConnect API');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
