import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../screens/home/Home";
import GameView from "../../screens/game-view/GameView";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/game-store" />
        <Route element={<GameView />} path="/game-store/game/:id" />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
