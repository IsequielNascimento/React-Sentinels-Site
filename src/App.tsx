import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';
import { Team } from './pages/team';
import { ActiveHeroes } from './pages/activeHeroes';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/activeHeroes" element={<ActiveHeroes/>} />
    </Routes>
   </Router>
  );
}

export default App;
