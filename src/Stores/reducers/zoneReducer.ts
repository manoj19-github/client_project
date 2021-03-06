import { ZoneMain } from "../../models/zoneModels";
import { StationActionTypes } from "../actions/stationAction";
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
    case StationActionTypes.Station_GetAll_Success:
      return { ...state, zone_list: action.payload.zone };
    case ZoneActionTypes.Get_Zone_By_Id_Success_Action:
      return { ...state, single_zone: action.payload };
    default:
      return state;
  }
}
