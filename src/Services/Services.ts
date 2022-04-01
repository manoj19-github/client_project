import { baseServiceUrl, environment } from "../environment";
import { AddFMSLocation } from "../models/fmsLocationModel";
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
  
export const StationAddService = (data: AddZone) => {
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
    // FMSLocation
export const GetAllFMSLocation = () => {
  return serviceClient.get(environment.url.GetAllFMSLocationUrl);
};
export const FMSLocationAddService = (data: AddFMSLocation) => {
  return serviceClient.post(environment.url.FMSLocationAdddUrl, data);
};
export const DeleteFMSLocation = (data: number) => {
  return serviceClient.get(environment.url.DeleteFMSLocationUrl + "/" + data);
};
export const GetFMSLocationById = (data: number) => {
  return serviceClient.get(environment.url.FMSLocationGetByIdUrl + "/" + data);
};
export const FMSLocationEdit = (data: ZoneList) => {
  return serviceClient.post(environment.url.FMSLocationUpdateUrl, data);
};
