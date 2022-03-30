import { ErrorModel } from "../../models/errorModels";
import { UserDetails, UserLoginModel } from "../../models/userModels";
import { UserLoginService } from "../../Services/Services";
import { ApiCallErrorAction, BeginApiCallAction } from "./apiStatusActions";
export enum UserActionTypes {
  User_Login_Success = "[USER] User Login Success",

  User_Logout_Success = "[USER] User Logout Success",
}
export const UserLogin = (payload: any) => {
  return (dispatch: any, getState: any) => {
    dispatch(
      BeginApiCallAction({
        count: 1,
        message: "Login. Please Wait.",
      })
    );
    return UserLoginService(payload.data)
      .then((response) => {
        if (!!(<ErrorModel>response.data.Errors)) {
          dispatch(ApiCallErrorAction(response.data.Errors));
        } else {
          setTimeout(() => {
            payload.history.replace("/dashboard");
          }, 200);
          dispatch(UserLoginSuccess(response.data));
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

export const UserLoginSuccess = (data: UserDetails) => {
  return { type: UserActionTypes.User_Login_Success, payload: data };
};

export const UserLogoutSuccess = () => {
  return { type: UserActionTypes.User_Logout_Success };
};
