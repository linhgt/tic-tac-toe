import { configureStore } from "@reduxjs/toolkit";
import ticTacToe from "./tic-tac-toe";

export const store = configureStore({
  reducer: {
    ticTacToe
  }
});
