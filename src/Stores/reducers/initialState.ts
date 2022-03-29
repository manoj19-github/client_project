import { StoreState } from "../../models/reduxModels";

const InitialState: StoreState = {
  loading: {
    count: 0,
    message: "",
  },
  error: {
    error_repo: [],
  },
  user: {
    userDetails: {
      email: "example@email.com",
      roleType: "ADMIN",
      userName: "Rabi Thakur",
      contact: "8745968874",
      accessToken: "sdff",
      userType: "sdad",
      userid: 2,
    },
  },
};

export default InitialState;
