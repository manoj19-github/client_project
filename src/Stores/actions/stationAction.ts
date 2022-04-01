import { ErrorModel } from "../../models/errorModels";
import { StationList } from "../../models/stationModel";
import {
  GetAllStation,
  GetAllZone,
  StationAddService,
} from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";

export enum StationActionTypes {
  Station_GetAll_Success = "[STATION] Station GetAll Success",
  Station_Add_Success_Action = "[STATION] Station Add Success Action",
}
export const GetAllStations = () => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading Station Please Wait.",
      })
    );
    return Promise.all([GetAllStation(), GetAllZone()])
      .then((response) => {
        if (!!(<ErrorModel>response[0].data.Errors)) {
          dispatch(ApiCallErrorAction(response[0].data.Errors));
        } else if (!!(<ErrorModel>response[1].data.Errors)) {
          dispatch(ApiCallErrorAction(response[1].data.Errors));
        } else {
          dispatch(
            GetAllStationSuccess({
              station: response[0].data,
              zone: response[1].data,
            })
          );
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(UserLogoutSuccess());
        }
        dispatch(
          ApiCallErrorAction({
            errorCode: "",
            message: "Error encountered please try again later",
          })
        );
      });
  };
};

export const GetAllStationSuccess = (data: any) => {
  return { type: StationActionTypes.Station_GetAll_Success, payload: data };
};

export const AddStations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Adding Station Please Wait.",
      })
    );
    return StationAddService(data.payload)
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/station");
          dispatch(AddStationSuccess());
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(UserLogoutSuccess());
        }
        dispatch(
          ApiCallErrorAction({
            errorCode: "",
            message: "Error encountered please try again later",
          })
        );
      });
  };
};

export const AddStationSuccess = () => {
  return { type: StationActionTypes.Station_Add_Success_Action };
};
