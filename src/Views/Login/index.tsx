import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginMain from "./LoginMain";

const Login = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/login-main`} />}
      />
      <Route path={`${path}/login-main`} render={() => <LoginMain />} />
    </Switch>
  );
};

export default Login;
