// Import mongoose library to define schema and create the model
const mongoose = require('mongoose');

// Define the schema for glossary terms  
const glossaryTermSchema = new mongoose.Schema({
  
  termEnglish: { // The tech term in English (required)
    type: String,
    required: true
  },
  termSpanish: { // The translation of the term in Spanish (required)
    type: String,
    required: true
  },
  pronunciation: { // Optional pronunciation guide for the term
    type: String
  },
  exampleSentence: {  // Optional example sentence showing the term in context
    type: String
  }
});

// Export the model to be used in routes and controllers
module.exports = mongoose.model('GlossaryTerm', glossaryTermSchema);
