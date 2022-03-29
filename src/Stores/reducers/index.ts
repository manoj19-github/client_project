import { combineReducers } from "redux";
import ErrorReducer from "./errorReducer";
import LoadingReducer from "./loadingReducer";
import UserReducer from "./userReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  error: ErrorReducer,
  user: UserReducer,
});

export default rootReducer;
