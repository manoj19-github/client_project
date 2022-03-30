import { combineReducers } from "redux";
import ErrorReducer from "./errorReducer";
import LoadingReducer from "./loadingReducer";
import UserReducer from "./userReducer";
import ZoneReducer from "./zoneReducer";

const rootReducer = combineReducers({
  loading: LoadingReducer,
  error: ErrorReducer,
  user: UserReducer,
  zone: ZoneReducer,
});

export default rootReducer;
