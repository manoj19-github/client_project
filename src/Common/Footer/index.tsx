import { Grid } from "@mui/material";
import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <Grid container spacing={0} alignItems="center" className="footer">
      <Grid item className="text-style">
        Developed By <b>Msqube</b>
      </Grid>
    </Grid>
  );
};

export default Footer;
