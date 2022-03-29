import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { useSelector } from "react-redux";
import { storess } from "../index";
import { StoreState } from "../models/reduxModels";

export default class RestService {
  client: AxiosInstance;
  constructor(config: AxiosRequestConfig) {
    this.client = axios.create(config);
    this.client.interceptors.request.use(
      async (config) => {
        const token = await getToken();
        if (token) {
          config.headers["Authorization"] = token;
        }
        console.log("Request: ", config.url, config.headers?.Authorization);
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.client.interceptors.response.use(
      async (response) => {
        if (response?.data?.token) {
          await setToken(response?.data?.token);
          this.client.defaults.headers.common["Authorization"] =
            response?.data?.token;
        }
        return response;
      },
      async (error) => {
        const originalRequest = error?.config;
        if (error?.response?.status === 401 && !originalRequest?._retry) {
          originalRequest._retry = true;
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return this.client(originalRequest);
        } else if (
          error?.response?.status === 403 &&
          !originalRequest?._retry
        ) {
          originalRequest._retry = true;
          if (error?.response?.data?.token) {
            await setToken(error?.response?.data?.token);
            this.client.defaults.headers.common["Authorization"] =
              error.response?.data?.token;
            await new Promise((resolve) => setTimeout(resolve, 500));
            return this.client(originalRequest);
          }
          await new Promise((resolve) => setTimeout(resolve, 1000));
          return this.client(originalRequest);
        }

        return Promise.reject(error);
      }
    );
  }

  get(endpoint: string) {
    return this.client.get<any>(endpoint);
  }

  post(endpoint: string, payload: any) {
    return this.client.post<any>(endpoint, payload);
  }
}

const getToken = async (): Promise<string | null | undefined> => {
  return await storess.getState().user.userDetails?.accessToken;
};

const setToken = async (token: string) => {
  return await "dds";
};
