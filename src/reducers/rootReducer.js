import { combineReducers } from "redux";
import menuReducer from "./menuReducer";
import sliderReducer from "./sliderReducer";
import calculatorReducer from "./calculatorReducer";
import calculatorFetchReducer from "./calculatorFetchReducer";

export default combineReducers({
  menuReducer,
  sliderReducer,
  calculatorReducer,
  calculatorFetchReducer
});