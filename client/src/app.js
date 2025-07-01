import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlossaryPage from './pages/GlossaryPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/glossary" element={<GlossaryPage />} />
        {/* Add other routes here later */}
      </Routes>
    </Router>
  );
}

export default App;

