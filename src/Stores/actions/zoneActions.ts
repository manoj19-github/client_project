import { ErrorModel } from "../../models/errorModels";
import { ZoneList } from "../../models/zoneModels";
import { GetAllZone, ZoneAddService } from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";

export enum ZoneActionTypes {
  Zone_GetAll_Success = "[ZONE] Zone GetAll Success",
  Zone_Add_Success_Action = "[ZONE] Zone Add Success Action",
}
export const GetAllZones = () => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading Zone Please Wait.",
      })
    );
    return GetAllZone()
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          dispatch(GetAllZoneSuccess(response.data));
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // showToast("Please Login again to continue.");
          dispatch(UserLogoutSuccess());
        }
        dispatch(
          ApiCallErrorAction({
            Business_Errors: [],
            Info: [],
            System_Errors: [
              {
                Code: "SE001",
                Message: "Error",
                Payload: [],
              },
            ],
            Warnings: [],
          })
        );
      });
  };
};

export const GetAllZoneSuccess = (data: ZoneList[]) => {
  return { type: ZoneActionTypes.Zone_GetAll_Success, payload: data };
};

export const AddZones = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Adding Zone Please Wait.",
      })
    );
    return ZoneAddService(data.payload)
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/zone");
          dispatch(AddZoneSuccess());
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(UserLogoutSuccess());
        }
        dispatch(
          ApiCallErrorAction({
            Business_Errors: [],
            Info: [],
            System_Errors: [
              {
                Code: "SE001",
                Message: "Error",
                Payload: [],
              },
            ],
            Warnings: [],
          })
        );
      });
  };
};

export const AddZoneSuccess = () => {
  return { type: ZoneActionTypes.Zone_Add_Success_Action };
};
