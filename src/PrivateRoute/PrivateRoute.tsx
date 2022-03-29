import React from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { StoreState } from "../models/reduxModels";

const PrivateRoute = ({
  component: Component,
  history,
  userDetail,
  ...rest
}: any) => (
  <Route
    {...rest}
    render={(props) =>
      !userDetail ? <Redirect to="/login" /> : <Component {...props} />
    }
  />
);

const mapStateToProps = (state: StoreState) => {
  return {
    userDetail: state.user.userDetails,
  };
};
export default connect(mapStateToProps)(PrivateRoute);
