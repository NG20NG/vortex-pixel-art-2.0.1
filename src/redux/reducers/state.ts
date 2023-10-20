import { createSlice } from "@reduxjs/toolkit";
// import { StateType } from "../types/stateTypes";
import type { PayloadAction } from "@reduxjs/toolkit";

//
//
interface StateType {
  isRightToolBar: boolean;
  isMouseDownUp: boolean;
  isColorPicker: boolean;
  isCursorOn: boolean;
  isGridOn: boolean;
  //========================
  currentLine: 1 | 2 | 3;
  currentColor: string;
  currentTool: string;
  topTools: string[];
  tools: string[];
  //========================
}

//
const initialState: StateType = {
  //===================================================
  isRightToolBar: false,
  isMouseDownUp: false,
  isColorPicker: false,
  isCursorOn: true,
  isGridOn: true,
  //===================================================
  currentColor: "white",
  currentTool: "pen",
  tools: ["pen", "eraser", "colorPicker"],
  topTools: ["grid", "save", "rightToolBar"],
  currentLine: 1,
  //===================================================
};
//
//
const stateSlice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setAll: (state, { payload }: PayloadAction<any>) => {
      state = { ...state, ...payload };
    },
    //
    setIsColorPicker: (state, { payload }: PayloadAction<boolean>) => {
      state.isColorPicker = !payload ? false : !state.isColorPicker;
    },
    //
    setCurrentTool: (state, { payload }: PayloadAction<string>) => {
      state.currentTool = payload;
    },
    //
    setCurrentColor: (state, { payload }: PayloadAction<string>) => {
      state.currentColor = payload;
    },
  },
});
//
//
//
//
export const { setAll, setIsColorPicker, setCurrentTool, setCurrentColor } =
  stateSlice.actions;
export default stateSlice.reducer;
