import * as React from "react";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import "./SideNav.css";
import { Drawer, Icon, IconButton, styled } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { connect } from "react-redux";
import { StoreState } from "../../models/reduxModels";
import { UserDetails } from "../../models/userModels";
import { useEffect, useState } from "react";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import CableIcon from "@mui/icons-material/Cable";
import SettingsInputCompositeIcon from "@mui/icons-material/SettingsInputComposite";
import LanIcon from "@mui/icons-material/Lan";
import { Link, useHistory } from "react-router-dom";
const SideNav = ({ open, setOpen, userDetail }: SideNavProps) => {
  const history = useHistory();
  const NavigateToUrl = (url: any) => {
    history.push(url);
  };
  const [navItemOne, SetNavItemOne] = useState<SideNavItem[]>([
    {
      key: 1,
      Text: "Zone",
      icon: <LocationOnIcon />,
      url: "/zone",
      hasPermission: true,
    },
    {
      key: 2,
      Text: "Station",
      icon: <CorporateFareIcon />,
      url: "/station",
      hasPermission: true,
    },
    {
      key: 3,
      Text: "FMS Location",
      icon: <HomeWorkIcon />,
      url: "/fms-location",
      hasPermission: true,
    },
    {
      key: 4,
      Text: "FMS",
      icon: <AccountTreeIcon />,
      url: "/fms",
      hasPermission: true,
    },
    {
      key: 5,
      Text: "Cable",
      icon: <CableIcon />,
      url: "/cable",
      hasPermission: true,
    },
  ]);
  const [navItemTwo, SetNavItemTwo] = useState<SideNavItem[]>([
    {
      key: 1,
      Text: "Cable Master",
      icon: <SettingsInputCompositeIcon />,
      url: "/cable-master",
      hasPermission: true,
    },
    {
      key: 2,
      Text: "FMS Master",
      icon: <LanIcon />,
      url: "/cable",
      hasPermission: true,
    },
  ]);
  const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  }));
  return (
    <>
      {!!userDetail && !!userDetail.userid && (
        <Drawer
          sx={{
            width: 270,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: 270,
              boxSizing: "border-box",
            },
          }}
          PaperProps={{ style: { height: "calc(100vh - 100px)", top: 70 } }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <div className="container">
            <DrawerHeader>
              <IconButton onClick={() => setOpen(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem button onClick={() => NavigateToUrl("/dashboard")}>
                <ListItemIcon>
                  <Icon>dashboard</Icon>
                </ListItemIcon>
                <ListItemText primary={"Dashboard"} />
              </ListItem>
            </List>
            <Divider />
            <List>
              {navItemOne.map((item, index) => (
                <ListItem
                  button
                  key={item.key}
                  onClick={() => NavigateToUrl(item.url)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.Text} />
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              {navItemTwo.map((item, index) => (
                <ListItem
                  button
                  key={item.key}
                  onClick={() => NavigateToUrl(item.url)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.Text} />
                </ListItem>
              ))}
            </List>
          </div>
        </Drawer>
      )}
    </>
  );
};
const mapStateToProps = (state: StoreState) => {
  return {
    userDetail: state.user.userDetails,
  };
};
export default connect(mapStateToProps)(SideNav);

interface SideNavProps {
  open?: boolean;
  setOpen?: any;
  userDetail?: UserDetails;
}

interface SideNavItem {
  url: string;
  icon: any;
  Text: string;
  hasPermission?: boolean;
  key: number;
}
