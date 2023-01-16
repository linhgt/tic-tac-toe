import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainMenu from "@/containers/main-menu/";
import GameBoard from "@/containers/game-board";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainMenu />
  },
  {
    path: "/game-board",
    element: <GameBoard />
  }
]);

export default router;
