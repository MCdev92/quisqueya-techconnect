import React, { useEffect, useState } from 'react';
import axios from 'axios';

function GlossaryPage() {
  // State to hold glossary terms
  const [terms, setTerms] = useState([]);

  // Fetch glossary data when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/glossary')
      .then(res => setTerms(res.data))
      .catch(err => console.log('Error fetching glossary:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tech Glossary</h1>
      <ul>
        {terms.map(term => (
          <li key={term._id} className="mb-3 border-b pb-2">
            <strong>{term.termEnglish}</strong> – {term.termSpanish}
            {term.pronunciation && <p>Pronunciation: {term.pronunciation}</p>}
            {term.exampleSentence && <p>Example: {term.exampleSentence}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GlossaryPage;
