import { StoreState } from "../../models/reduxModels";

const InitialState: StoreState = {
  loading: {
    count: 0,
    message: "",
  },
  error: {
    error: undefined,
  },
  user: {
    userDetails: undefined,
    // {
    //   email: "example@email.com",
    //   roleType: "ADMIN",
    //   userName: "Rabi Thakur",
    //   contact: "8745968874",
    //   accessToken: "sdff",
    //   userType: "sdad",
    //   userid: 2,
    // },
  },
  zone: {
    zone_list: [],
    single_zone: undefined,
  },
  fmslocation: {
    fmslocation_list: [],
    single_fmslocation: undefined,
  },
  station: {
    station_list: [],
    single_station: undefined,
    has_filter: undefined
  },
};

export default InitialState;
