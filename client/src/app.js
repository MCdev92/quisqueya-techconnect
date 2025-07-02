import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlossaryPage from './pages/GlossaryPage';
import TechCareersPage from './pages/TechCareersPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/techCareers" element={<TechCareersPage />} />
      </Routes>
    </Router>
  );
}

export default App;

