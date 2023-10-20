//
//
//
//
//
//
//

import { setIsColorPicker } from "@/redux/reducers/state";
import { useDispatch } from "react-redux";

//
export const useColorPicker = () => {
  const Dis = useDispatch();
  return (e: boolean) => {
    Dis(setIsColorPicker(e));
  };
};
//
//
