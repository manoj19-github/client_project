import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import LoginMain from "./LoginMain";

const Login = (props: any) => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/login-main`} />}
      />
      <Route exact path={`${path}/login-main`} render={() => <LoginMain />} />
    </Switch>
  );
};

export default Login;
