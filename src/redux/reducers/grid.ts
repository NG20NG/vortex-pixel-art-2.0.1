import { createSlice } from "@reduxjs/toolkit";
//
import { GridType } from "../types/gridTypes";
//
//
//
const initialState: GridType = {
  canvasSize: 4,
  gridSize: 400,
};
//
//
const gridSlice = createSlice({
  name: "grid",
  initialState,
  reducers: {
    setCanvasSize: (state, { payload }) => {
      state.canvasSize = payload;
    },
    //
    setGridSize: (state, { payload }) => {
      state.gridSize = payload;
    },
  },
});
//
//
//
//
export const { setCanvasSize, setGridSize } = gridSlice.actions;
export default gridSlice.reducer;
