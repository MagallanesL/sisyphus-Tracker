import Cronometro from './components/crono/cronometro';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/cronometro" element={<Cronometro />} />
      </Routes>
    </Router>
  );
}

export default App;
