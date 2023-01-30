import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';
import { Team } from './pages/team';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/initiative" element={<Initiative/>} />
      <Route path="/team" element={<Team/>} />
    </Routes>
   </Router>
  );
}

export default App;
