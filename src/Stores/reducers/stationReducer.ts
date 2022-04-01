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
      return { ...state, station_list: action.payload };
    default:
      return state;
  }
}
