import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';
import { Team } from './pages/team';
import { ActiveHeroes } from './pages/activeHeroes';
import { InactiveHeroes } from './pages/inactiveHeroes';
import { News } from './pages/news';
import {HistoryHeroes} from './pages/historyHeroes';
import Act1 from './pages/Atos/Act1';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
      <Route path="/team" element={<Team/>} />
      <Route path="/activeHeroes" element={<ActiveHeroes/>} />
      <Route path="/inactiveHeroes" element={<InactiveHeroes/>} />
      <Route path="/historyHeroes" element={<HistoryHeroes/>} />
      <Route path="/news" element={<News/>} />

       
      <Route path="/Atos/Act1" element={<Act1/>} />
    </Routes>
   </Router>
  );
}

export default App;
