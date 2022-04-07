import { Route, Routes } from "react-router-dom";
import { Game } from "modules/game/Game";
import { About } from "modules/about/About";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Game />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
