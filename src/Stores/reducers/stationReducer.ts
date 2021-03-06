import { StationMain } from "../../models/stationModel";
import { StationActionTypes } from "../actions/stationAction";
import InitialState from "./initialState";

const initialState: StationMain = InitialState.station;

export default function StationReducer(
  state: StationMain = initialState,
  action: any
) {
  switch (action.type) {
    case StationActionTypes.Station_GetAll_Success:
      return { ...state, station_list: action.payload.station };
    case StationActionTypes.Get_Station_By_Id_Success_Action:
      return { ...state, single_station: action.payload };
    case StationActionTypes.Get_Station_By_ZoneId_Success_Action:
      return { ...state, station_list: action.payload };
    case  StationActionTypes.Filter_Update_Success_Action:
      return { ...state,has_filter : action.payload };
    default:
      return state;
  }
}
