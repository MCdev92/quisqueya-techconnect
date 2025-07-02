import React, { useEffect, useState } from 'react';
import axios from 'axios';

function TechCareersPage() {
  // State to hold tech careers data
  const [careers, setCareers] = useState([]);

  // Fetch tech careers from the backend API when component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/techcareers')
      .then(res => setCareers(res.data))
      .catch(err => console.log('Error fetching tech careers:', err));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Tech Careers</h1>
      {careers.map(career => (
        <div key={career._id} className="mb-6 border p-4 rounded shadow">
          <h2 className="text-xl font-semibold">{career.careerName}</h2>
          <p className="mt-2">{career.description}</p>
          <div className="mt-2">
            <strong>Key Skills:</strong>
            <ul className="list-disc list-inside">
              {career.keySkills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
          <div className="mt-2">
            <strong>Resources:</strong>
            <ul className="list-disc list-inside">
              {career.resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TechCareersPage;
