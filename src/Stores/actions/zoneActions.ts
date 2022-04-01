import { ErrorModel } from "../../models/errorModels";
import { ZoneList } from "../../models/zoneModels";
import {
  DeleteZone,
  GetAllZone,
  GetZoneById,
  ZoneAddService,
  ZoneEdit,
} from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
import { UserLogoutSuccess } from "./userAction";
export enum ZoneActionTypes {
  Zone_GetAll_Success = "[ZONE] Zone GetAll Success",
  Zone_Add_Success_Action = "[ZONE] Zone Add Success Action",
  Zone_Delete_Success_Action = "[ZONE] Zone Delete Success Action",
  Get_Zone_By_Id_Success_Action = "[ZONE] Get Zone By Id Success Action",
  Update_Zone_Success_Action = "[ZONE] Update Zone Success Action",
}
export const GetAllZones = () => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading Zone Please Wait...",
      })
    );
    return GetAllZone()
      .then((response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          dispatch(GetAllZoneSuccess(response.data));
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

export const GetAllZoneSuccess = (data: ZoneList[]) => {
  return { type: ZoneActionTypes.Zone_GetAll_Success, payload: data };
};

export const AddZones = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Adding Zone Please Wait...",
      })
    );
    return ZoneAddService(data.payload)
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          data.history.replace("/zone");
          await data.enqueueSnackbar("Zone Successfully Added!", {
            variant: "success",
          });
          dispatch(AddZoneSuccess());
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

export const AddZoneSuccess = () => {
  return { type: ZoneActionTypes.Zone_Add_Success_Action };
};

export const DeleteZones = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Deleting Zone Please Wait...",
      })
    );
    return DeleteZone(data.payload)
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data));
        } else {
          await data.enqueueSnackbar("Deleted Successfully!", {
            variant: "success",
          });
          dispatch(DeleteZoneSuccess());
          dispatch(GetAllZones());
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

export const DeleteZoneSuccess = () => {
  return { type: ZoneActionTypes.Zone_Delete_Success_Action };
};

export const GetZonesByIds = (data: number) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Loading Zone Please Wait...",
      })
    );
    return GetZoneById(data)
      .then((response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          dispatch(GetZoneByIdSuccess(response.data));
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
export const GetZoneByIdSuccess = (payload: ZoneList) => {
  return {
    type: ZoneActionTypes.Get_Zone_By_Id_Success_Action,
    payload: payload,
  };
};

export const UpdateZones = (data: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Updating Zone Please Wait...",
      })
    );
    return ZoneEdit(data.payload)
      .then(async (response) => {
        if (response.status != 200) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          data.history.replace("/zone");
          await data.enqueueSnackbar("Zone Successfully Updated!", {
            variant: "success",
          });
          dispatch(UpdateZoneSuccess());
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

export const UpdateZoneSuccess = () => {
  return { type: ZoneActionTypes.Update_Zone_Success_Action };
};
