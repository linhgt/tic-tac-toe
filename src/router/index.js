import { createBrowserRouter } from "react-router-dom";
import ErrorComponent from "@/containers/error";
import MainMenu from "@/containers/main-menu/";
import GameBoard from "@/containers/game-board";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: (
      <ErrorComponent />
    ) /** Handle Error in the root level, specifying custom error component to display error */,
    children: [
      {
        path: "",
        element: <MainMenu />
      },
      {
        path: "/game-board",
        element: <GameBoard />
      }
    ]
  }
]);

export default router;
