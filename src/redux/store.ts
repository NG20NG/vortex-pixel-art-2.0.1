import { configureStore } from "@reduxjs/toolkit";
import stateSlice from "./reducers/state";
import gridSlice from "./reducers/grid";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import { createSelector } from "reselect";

//

//
export const store = configureStore({
  reducer: { state: stateSlice, grid: gridSlice },
});
//
//
//
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectState = (state: RootState) => state.state;
const selectGrid = (state: RootState) => state.grid;

export const state = createSelector([selectState], (state) => state);
export const grid = createSelector([selectGrid], (grid) => grid);
