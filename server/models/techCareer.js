const mongoose = require('mongoose');

const techCareerSchema = new mongoose.Schema({
  careerName: {
    type: String,
    required: true,
  },
  description: String,
  keySkills: [String],
  resources: [String], // URLs or references to learning resources
}, { timestamps: true });

module.exports = mongoose.model('TechCareer', techCareerSchema);
