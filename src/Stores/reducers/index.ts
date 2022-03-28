import { combineReducers } from "redux";
import ErrorReducer from "./errorReducer";
import LoadingReducer from "./loadingReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  error: ErrorReducer,
});

export default rootReducer;
