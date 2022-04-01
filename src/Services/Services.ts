import { baseServiceUrl, environment } from "../environment";
import { AddStation, StationList } from "../models/stationModel";
import { UserLoginModel } from "../models/userModels";
import { AddZone, ZoneList } from "../models/zoneModels";
import RestService from "./rest";

export const serviceClient = new RestService({
  baseURL: baseServiceUrl,
});

export const UserLoginService = (data: UserLoginModel) => {
  return serviceClient.post(environment.url.LoginUrl, data);
};

export const GetAllZone = () => {
  return serviceClient.get(environment.url.GetAllZoneUrl);
};

export const ZoneAddService = (data: AddZone) => {
  return serviceClient.post(environment.url.ZoneAdddUrl, data);
};

export const GetAllStation = () => {
  return serviceClient.get(environment.url.GetAllStationUrl);
};

export const StationAddService = (data: AddStation) => {
  return serviceClient.post(environment.url.StationAdddUrl, data);
};
export const DeleteZone = (data: number) => {
  return serviceClient.get(environment.url.DeleteZoneUrl + "/" + data);
};
export const GetZoneById = (data: number) => {
  return serviceClient.get(environment.url.ZoneGetByIdUrl + "/" + data);
};
export const ZoneEdit = (data: ZoneList) => {
  return serviceClient.post(environment.url.ZoneUpdateUrl, data);
};

export const DeleteStation = (data: number) => {
  return serviceClient.get(environment.url.StationDeleteUrl + "/" + data);
};

export const GetStationById = (data: number) => {
  return serviceClient.get(environment.url.StationGetByIdUrl + "/" + data);
};
export const StationEdit = (data: StationList) => {
  return serviceClient.post(environment.url.StationUpdateUrl, data);
};
