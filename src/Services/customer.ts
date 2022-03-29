import { baseServiceUrl, environment } from "../environment";
import { UserLoginModel } from "../models/userModels";
import RestService from "./rest";

export const serviceClient = new RestService({
  baseURL: baseServiceUrl,
});

export const UserLoginService = (data: UserLoginModel) => {
  return serviceClient.post(environment.url.LoginUrl, data);
};
