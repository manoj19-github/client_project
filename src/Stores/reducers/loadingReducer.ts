import { LoadingState } from "../../models/loadingModelss";
import InitialState from "./initialState";

const initialState: LoadingState = InitialState.loading;

export default function LoadingReducer(
  state: LoadingState = initialState,
  action: any
) {
  switch (action.type) {
    default:
      return state;
  }
}
