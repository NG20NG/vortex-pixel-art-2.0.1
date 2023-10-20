//
//
//
//
import { useAppSelector } from "@/redux/store";
//
//
//
//
export const useStoreState = () => useAppSelector(({ state }) => state);
export const useStoreGrid = () => useAppSelector(({ grid }) => grid);
//
//
