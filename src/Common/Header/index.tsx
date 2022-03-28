import { Avatar, Grid, IconButton } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import React from "react";
import "./Header.css";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import { AccountCircle } from "@mui/icons-material";

const Header = ({ setOpen, open }: headerProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Grid
      container
      spacing={0}
      alignItems="center"
      justifyContent={"center"}
      className="header"
    >
      <Grid
        xs={4}
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid container xs={3} justifyContent="flex-start">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(!open)}
          >
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid container xs={9} justifyContent="flex-start">
          <img
            style={{ width: "40%" }}
            src={require("../../assets/CESC-LOGO-FINAL.png")}
          />
        </Grid>
      </Grid>
      <Grid
        item
        xs={4}
        className="text-styles"
        alignItems="center"
        justifyContent="center"
      >
        Optical Fibre Management System
      </Grid>
      <Grid
        container
        item
        xs={4}
        alignItems="end"
        justifyContent="end"
        paddingRight={5}
      >
        <div>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle style={{ color: "#ffff", fontSize: "30px" }} />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
            <MenuItem onClick={handleClose}>LogOut</MenuItem>
          </Menu>
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
interface headerProps {
  setOpen?: any;
  open?: boolean;
}
