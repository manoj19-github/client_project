import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AddStation from "./AddStation";
import EditStation from "./EditStation";
import StationMain from "./StationMain";

const Station = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/station-main`} />}
      />
      <Route
        exact
        path={`${path}/station-main`}
        render={() => <StationMain />}
      />
      <Route exact path={`${path}/add-station`} render={() => <AddStation />} />
      <Route path={`${path}/edit-station/:id`} render={() => <EditStation />} />
    </Switch>
  );
};

export default Station;
