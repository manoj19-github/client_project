import { StoreState } from "../../models/reduxModels";

const InitialState: StoreState = {
  loading: {
    count: 0,
    message: "",
  },
  error: {
    error_repo: [],
  },
};

export default InitialState;
