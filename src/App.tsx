import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
      {/* <Route path="*" element={<Team/>} />
      <Route path="*" element={<Contact/>} />
      <Route path="*" element={<News/>} /> */}

    </Routes>
   </Router>
  );
}

export default App;
