import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Zone from "./Views/Zone";
import { Route, Routes } from "react-router-dom";
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
function App() {
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
      <div>
        <Header open={open} setOpen={setOpen} />
      </div>
      <div className="Containers">
        <SideNav open={open} setOpen={setOpen} />
        <Main open={open}>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Main>
      </div>
      <div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
