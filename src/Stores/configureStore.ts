import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { StoreState } from "../models/reduxModels";
import rootReducer from "./reducers";

export default function ConfigureStore(initialState?: StoreState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
