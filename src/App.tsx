import { BrowserRouter as Router } from 'react-router-dom';
import { AppRoutes } from 'routes';
import { Menu } from 'modules/menu/Menu';

export default function App() {
  return (
    <Router>
      <div>
        <Menu />
        <AppRoutes />
      </div>
    </Router>
  );
}
