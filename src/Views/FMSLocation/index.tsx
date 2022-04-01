import { Redirect, Route, Switch, useRouteMatch } from "react-router-dom";
import AddFMSLocation from "./AddFMSLocation";
import EditFMSLocation from "./EditFMSLocation";
import FMSLocationMain from "./FMSLocationMain";


const FMSLocation = () => {
  const { path, url } = useRouteMatch();
  return (
    <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/fmslocation-main`} />}
      />
      <Route exact path={`${path}/fmslocation-main`} render={() => <FMSLocationMain />} />
      <Route exact path={`${path}/add-fmslocation`} render={() => <AddFMSLocation />} />
      <Route path={`${path}/edit-fmslocation/:id`} render={() => <EditFMSLocation />} />
    </Switch>
  );
};

export default FMSLocation;
