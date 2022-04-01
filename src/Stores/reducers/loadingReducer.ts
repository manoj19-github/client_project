import { LoadingState } from "../../models/loadingModelss";
import { ApiStatusActionTypes } from "../actions/apiStatusActions";
import { UserActionTypes } from "../actions/userAction";
import { ZoneActionTypes } from "../actions/zoneActions";
import InitialState from "./initialState";

const initialState: LoadingState = InitialState.loading;

export default function LoadingReducer(
  state: LoadingState = initialState,
  action: any
) {
  switch (action.type) {
    case ApiStatusActionTypes.Begin_Api_Call:
      return {
        ...state,
        count: state.count + action.payload.count,
        message: action.payload.message,
      };
    case ApiStatusActionTypes.Api_Call_Error:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case UserActionTypes.User_Login_Success:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case ZoneActionTypes.Zone_GetAll_Success:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case ZoneActionTypes.Zone_Add_Success_Action:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case ZoneActionTypes.Zone_Delete_Success_Action:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case ZoneActionTypes.Get_Zone_By_Id_Success_Action:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    case ZoneActionTypes.Update_Zone_Success_Action:
      return { ...state, count: state.count > 0 ? state.count - 1 : 0 };
    default:
      return state;
  }
}
