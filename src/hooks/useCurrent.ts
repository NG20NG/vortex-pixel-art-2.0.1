//
//
//
//
//
//
//

import { setCurrentColor, setCurrentTool } from "@/redux/reducers/state";
import { useDispatch } from "react-redux";

//
export const useCurrent = () => {
  const Dis = useDispatch();
  const setTool = (tool: string) => Dis(setCurrentTool(tool));
  const setColor = (color: string) => Dis(setCurrentColor(color));
  return { setTool, setColor };
};
