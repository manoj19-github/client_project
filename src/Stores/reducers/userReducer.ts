import { UserMain } from "../../models/userModels";
import { UserActionTypes } from "../actions/userAction";
import InitialState from "./initialState";

const initialState: UserMain = InitialState.user;

export default function UserReducer(
  state: UserMain = initialState,
  action: any
) {
  switch (action.type) {
    case UserActionTypes.User_Login_Success:
      return { ...state, userDetails: action.payload };
    default:
      return state;
  }
}
