import { baseServiceUrl, environment } from "../environment";
import { UserLoginModel } from "../models/userModels";
import { AddZone } from "../models/zoneModels";
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
