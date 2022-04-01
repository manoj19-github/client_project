import { ErrorModel } from "../../models/errorModels";
import { StationList } from "../../models/stationModel";
import {
  DeleteStation,
  GetAllStation,
  GetAllZone,
  GetStationById,
  StationAddService,
  StationEdit,
} from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";

export enum StationActionTypes {
  Station_GetAll_Success = "[STATION] Station GetAll Success",
  Station_Add_Success_Action = "[STATION] Station Add Success Action",
  Station_Delete_Success_Action = "[STATION] Station Delete Success Action",
  Get_Station_By_Id_Success_Action = "[STATION] Get Station By Id Success Action",
  Update_Station_Success_Action = "[STATION] Update Station Success Action",
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
        if (response[0].status != 200) {
          dispatch(ApiCallErrorAction(response[0].data));
        } else if (response[1].status != 200) {
          dispatch(ApiCallErrorAction(response[1].data));
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
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          data.history.replace("/station");
          await data.enqueueSnackbar("Station Successfully Added!", {
            variant: "success",
          });
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

export const DeleteStations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Deleting Station Please Wait...",
      })
    );
    return DeleteStation(data.payload)
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          await data.enqueueSnackbar("Deleted Successfully!", {
            variant: "success",
          });
          dispatch(DeleteStationSuccess());
          dispatch(GetAllStations());
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

export const DeleteStationSuccess = () => {
  return { type: StationActionTypes.Station_Delete_Success_Action };
};

export const GetStationByIds = (data: number) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading Station Please Wait...",
      })
    );
    return GetStationById(data)
      .then((response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          dispatch(GetStationByIdSuccess(response.data));
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          // showToast("Please Login again to continue.");
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
export const GetStationByIdSuccess = (payload: StationList) => {
  return {
    type: StationActionTypes.Get_Station_By_Id_Success_Action,
    payload: payload,
  };
};

export const UpdateStations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Updating Zone Please Wait...",
      })
    );
    return StationEdit(data.payload)
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/station");
          await data.enqueueSnackbar("Station Successfully Updated!", {
            variant: "success",
          });
          dispatch(UpdateStationSuccess());
        }
      })
      .catch((error) => {
        if (error.response.status === 401) {
          dispatch(UserLogoutSuccess());
        } else {
          dispatch(
            ApiCallErrorAction({
              errorCode: "",
              message: "Error encountered please try again later",
            })
          );
        }
      });
  };
};

export const UpdateStationSuccess = () => {
  return { type: StationActionTypes.Update_Station_Success_Action };
};
