import { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { StoreState } from "../../../models/reduxModels";
import { UserDetails } from "../../../models/userModels";
import { UserLogin } from "../../../Stores/actions/userAction";
import LoginMainView from "./LoginMainView";

const LoginMain = ({ UserLogin, user }: LoginProps) => {
  const history = useHistory();
  const Submit = (data: any) => {
    UserLogin({
      data: data,
      history: history,
    });
  };
  return <LoginMainView Submit={Submit} />;
};

const mapStateToProps = (state: StoreState) => {
  return {
    user: state.user.userDetails,
  };
};
const mapDispatchToProps = {
  UserLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginMain);

interface LoginProps {
  UserLogin?: any;
  user?: UserDetails;
}
