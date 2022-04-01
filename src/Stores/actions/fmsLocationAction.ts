import { ErrorModel } from "../../models/errorModels";
import { FMSLocationList } from "../../models/fmsLocationModel";

import {
    DeleteFMSLocation,
  FMSLocationAddService,
  FMSLocationEdit,
  GetAllFMSLocation,
  GetFMSLocationById,
 
} from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";
export enum FMSLocationActionTypes {
  FMSLocation_GetAll_Success = "[FMSLOCATION] FMSLocation GetAll Success",
  FMSLocation_Add_Success_Action = "[FMSLOCATION] FMSLocation Add Success Action",
  FMSLocation_Delete_Success_Action = "[FMSLOCATION] FMSLocation Delete Success Action",
  Get_FMSLocation_By_Id_Success_Action = "[FMSLOCATION] Get FMSLocation By Id Success Action",
  Update_FMSLocation_Success_Action = "[FMSLOCATION] Update FMSLocation Success Action",
}
export const GetAllFMSLocations = () => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading FMSLocation Please Wait...",
      })
    );
    return GetAllFMSLocation()
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          dispatch(GetAllFMSLocationSuccess(response.data));
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

export const GetAllFMSLocationSuccess = (data: FMSLocationList[]) => {
  return { type: FMSLocationActionTypes.FMSLocation_GetAll_Success, payload: data };
};

export const AddFMSLocations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Adding FMSLocation Please Wait...",
      })
    );
    return FMSLocationAddService(data.payload)
      .then(async (response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/fmslocation");
          await data.enqueueSnackbar("FMSLocation Successfully Added!", {
            variant: "success",
          });
          dispatch(AddFMSLocationSuccess());
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

export const AddFMSLocationSuccess = () => {
  return { type: FMSLocationActionTypes.FMSLocation_Add_Success_Action };
};

export const DeleteFMSLocations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Deleting FMSLocation Please Wait...",
      })
    );
    return DeleteFMSLocation(data.payload)
      .then(async (response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          await data.enqueueSnackbar("Deleted Successfully!", {
            variant: "success",
          });
          dispatch(DeleteFMSLocationSuccess());
          dispatch(GetAllFMSLocations());
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

export const DeleteFMSLocationSuccess = () => {
  return { type: FMSLocationActionTypes.FMSLocation_Delete_Success_Action };
};

export const GetFMSLocationsByIds = (data: number) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading FMSLocation Please Wait...",
      })
    );
    return GetFMSLocationById(data)
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          dispatch(GetFMSLocationByIdSuccess(response.data));
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
export const GetFMSLocationByIdSuccess = (payload: FMSLocationList) => {
  return {
    type: FMSLocationActionTypes.Get_FMSLocation_By_Id_Success_Action,
    payload: payload,
  };
};

export const UpdateFMSLocations = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Updating FMSLocation Please Wait...",
      })
    );
    return FMSLocationEdit(data.payload)
      .then(async (response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/fmslocation");
          await data.enqueueSnackbar("FMSLocation Successfully Updated!", {
            variant: "success",
          });
          dispatch(UpdateFMSLocationSuccess());
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

export const UpdateFMSLocationSuccess = () => {
  return { type: FMSLocationActionTypes.Update_FMSLocation_Success_Action };
};
