import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AddZone from "./AddZone";
import ZoneMain from "./ZoneMain";

const Zone = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/zone-main`} />}
      />
      <Route exact path={`${path}/zone-main`} render={() => <ZoneMain />} />
      <Route exact path={`${path}/add-zone`} render={() => <AddZone />} />
    </Switch>
  );
};

export default Zone;
