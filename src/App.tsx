import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Zone from "./Views/Zone";
import {
  Redirect,
  Route,
  Switch,
  useHistory,
  useRouteMatch,
} from "react-router-dom";
import Login from "./Views/Login";
import Dashboard from "./Views/Dashboard";
import {
  Container,
  createStyles,
  Grid,
  makeStyles,
  styled,
  Theme,
  ThemeProvider,
} from "@mui/material";
import CescLightTheme from "./themes/CescLightTheme";
import "./App.css";
import SideNav from "./Common/SideNav";
import Header from "./Common/Header";
import Footer from "./Common/Footer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Path from "./Views/Path";
import Loading from "./Views/Loading/Loading";
import { SnackbarProvider } from "notistack";
import { StoreState } from "./models/reduxModels";
import { connect } from "react-redux";
import { ErrorModel } from "./models/errorModels";
import ErrorToster from "./Views/ErrorToster";
import Station from "./Views/Station";
import FMSLocation from "./Views/FMSLocation";
import CableMaster from "./Views/CableMaster";

function App({ error }: Appprops) {
  const [open, setOpen] = useState(true);
  const Main = styled("main", {
    shouldForwardProp: (prop) => prop !== "open",
  })<{
    open?: boolean;
  }>(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${270}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  return (
    <ThemeProvider theme={CescLightTheme}>
      <SnackbarProvider maxSnack={3}>
        <ErrorToster />
        <div>
          <Header open={open} setOpen={setOpen} />
        </div>
        <div className="Containers">
          <Loading />
          <SideNav open={open} setOpen={setOpen} />
          <Main open={open} className="body-class">
            <div style={{ position: "fixed", top: 70 }}>
              <Path />
            </div>
            <Switch>
              <Route
                exact
                path="/"
                render={() =>
                  false ? (
                    <Redirect to="/dashboard" />
                  ) : (
                    <Redirect to="/login" />
                  )
                }
              />
              <Route path="/login" render={() => <Login />} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/zone" component={Zone} />
              <PrivateRoute path="/station" component={Station} />
              <PrivateRoute path="/fms-location" component={FMSLocation} />
              <PrivateRoute path="/cable-master" component={CableMaster} />
            </Switch>
          </Main>
        </div>
        <div>
          <Footer />
        </div>
      </SnackbarProvider>
    </ThemeProvider>
  );
}
const mapStateToProps = (state: StoreState) => {
  return {};
};
export default connect(mapStateToProps)(App);
interface Appprops {
  error?: ErrorModel;
}
