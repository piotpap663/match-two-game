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
          <Route
            path="/"
            element={
              <div>
                Look for pairs of cards by turning them over in turns, 2 at a
                time. If you find a match, you get a point - and you may turn
                over 2 more cards. Whoever finds more matches wins.
              </div>
            }
          />
          {/* <Route path="/about">
            <About />
          </Route> */}
        </Routes>
      </div>
    </Router>
  );
}
