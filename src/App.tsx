import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Initiative } from './pages/initiative';

function App() {
  return (
   <Router>
    <Routes>
      <Route path="/" element={<Initiative/>} />
     
    </Routes>
   </Router>
  );
}

export default App;
