import { configureStore } from "@reduxjs/toolkit";
import TicTacToe from "./tic-tac-toe";

export const store = configureStore({
  reducer: {
    TicTacToe
  }
});
