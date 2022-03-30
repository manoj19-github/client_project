import { ZoneMain } from "../../models/zoneModels";
import { ZoneActionTypes } from "../actions/zoneActions";
import InitialState from "./initialState";

const initialState: ZoneMain = InitialState.zone;

export default function ZoneReducer(
  state: ZoneMain = initialState,
  action: any
) {
  switch (action.type) {
    case ZoneActionTypes.Zone_GetAll_Success:
      return { ...state, zone_list: action.payload };
    default:
      return state;
  }
}
