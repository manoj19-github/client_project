import InitialState from "./initialState";
import { ErrorState, error_repo, ErrorModel } from "../../models/errorModels";

const initialState: ErrorState = InitialState.error;

export default function ErrorReducer(
  state: ErrorState = initialState,
  action: any
) {
  switch (action.type) {
    default:
      return state;
  }
}
