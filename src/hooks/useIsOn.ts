//
//
//
//
//
//
//

import { setIsColorPicker, setIsGridOn } from "@/redux/reducers/state";
import { useDispatch } from "react-redux";

//
export const useColorPicker = () => {
  const Dis = useDispatch();
  return (e: boolean) => Dis(setIsColorPicker(e));
};
//
//
//
//
export const useIsGridOn = () => {
  const Dis = useDispatch();
  return () => Dis(setIsGridOn());
};
