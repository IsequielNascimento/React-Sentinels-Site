import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';
import { Team } from './pages/team';
import { ActiveHeroes } from './pages/activeHeroes';
import { InactiveHeroes } from './pages/inactiveHeroes';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/activeHeroes" element={<ActiveHeroes/>} />
      <Route path="/inactiveHeroes" element={<InactiveHeroes/>} />
    </Routes>
   </Router>
  );
}

export default App;
