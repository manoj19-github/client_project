import { ErrorModel } from "../../models/errorModels";
import { LoadingPayload } from "../../models/loadingModelss";

export enum ApiStatusActionTypes {
  Begin_Api_Call = "[API_STATUS] Begin Api Call Action",
  Api_Call_Error = "[API_STATUS] Api Call Error Action",
}

export const BeginApiCallAction = (payload: LoadingPayload) => {
  return { type: ApiStatusActionTypes.Begin_Api_Call, payload: payload };
};

export const ApiCallErrorAction = (payload: ErrorModel) => {
  return { type: ApiStatusActionTypes.Api_Call_Error, payload: payload };
};
