import './App.css';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Game } from './modules/game/Game';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Game</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/game" element={<Game />} />
          <Route path="/" element={<div>Homepage</div>} />
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
