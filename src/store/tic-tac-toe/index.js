import { createSlice } from "@reduxjs/toolkit";
import { MARK } from "@/constant";

const initialState = {
  selection: MARK.X
};

const TicTacToe = createSlice({
  name: "TicTacToe",
  initialState,
  reducers: {
    updateSelection: function (state, action) {
      state.selection = action.payload;
    }
  }
});
export default TicTacToe;
