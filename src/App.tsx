import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';
import { Team } from './pages/team';
import { ActiveHeroes } from './pages/activeHeroes';
import { InactiveHeroes } from './pages/inactiveHeroes';
import { News } from './pages/news';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/activeHeroes" element={<ActiveHeroes/>} />
      <Route path="/inactiveHeroes" element={<InactiveHeroes/>} />
      <Route path="/news" element={<News/>} />
    </Routes>
   </Router>
  );
}

export default App;
