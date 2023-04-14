import { createSlice } from "@reduxjs/toolkit";
import { MARK } from "@/constant";

const initialState = {
  selectedMark: MARK.X,
  gameMode: ""
};

const ticTacToe = createSlice({
  name: "TicTacToe",
  initialState,
  reducers: {
    _selectMark: (state, action) => {
      return {
        ...state,
        selectedMark: action.payload
      };
    },
    _selectGameMode: (state, action) => {
      return {
        ...state,
        gameMode: action.payload
      };
    }
  }
});

export const { _selectMark, _selectGameMode } = ticTacToe.actions;

export default ticTacToe.reducer;
