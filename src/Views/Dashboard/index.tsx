import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import DashboardMain from "./DashboardMain";

const Dashboard = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/dashboard-main`} />}
      />
      <Route
        exact
        path={`${path}/dashboard-main`}
        render={() => <DashboardMain />}
      />
    </Switch>
  );
};

export default Dashboard;
