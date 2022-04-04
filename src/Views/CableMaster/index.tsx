import { AppBar, styled, Tab, Tabs } from '@mui/material';
import React, { useEffect } from 'react'
import { Link, Redirect, Route, Switch, useHistory, useLocation, useRouteMatch } from 'react-router-dom'
import CableMain from './CableMain';
import FibreMain from './FibreMain';
import TubeMain from './TubeMain';

function CableMaster() {
const { path, url } = useRouteMatch();
const history = useHistory();
const location = useLocation()
const routes = ["/cable-master/cable-main","/cable-master/tube-main", "/cable-master/fibre-main"];
  return (
    <div>
        <AppBar position="static" style={{marginTop: -15}}>
            <AntTabs
            variant="fullWidth"
            TabIndicatorProps={{style: {background:'#ffff'}}}
            textColor="inherit"
              value={
                history.location.pathname !== "/"
                ? history.location.pathname
                : false
              }
            >
              <AntTab
                value={routes[0]}
                label="CABLE MASTER"
                component={Link}
                to={routes[0]}
              />
              <AntTab
                value={routes[1]}
                label="TUBE MASTER"
                component={Link}
                to={routes[1]}
              />
              <AntTab
                value={routes[2]}
                label="FIBRE MASTER"
                component={Link}
                to={routes[2]}
              />
            </AntTabs>
            </AppBar>

      <Switch>
      <Route
        exact
        path={`${path}`}
        render={() => <Redirect to={`${path}/cable-main`} />}
      />
        <Route path="/cable-master/cable-main" component={CableMain} />
        <Route path="/cable-master/tube-main" component={TubeMain} />
        <Route path="/cable-master/fibre-main" component={FibreMain} />
      </Switch>
  </div>
  )
}

export default CableMaster


const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
      backgroundColor: '#ffff',
    },
  });
  
  const AntTab = styled((props: any) => <Tab disableRipple {...props} />)(
    ({ theme }: any) => ({
      textTransform: 'none',
      minWidth: 0,
      [theme.breakpoints.up('sm')]: {
        minWidth: 0,
      },
      fontWeight: 500,
      marginRight: theme.spacing(1),
      color: '#CEEFFC',
    //   fontSize: 16,
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        color: '#ffff',
        opacity: 1,
      },
      '&.Mui-selected': {
        color: '#ffff',
        fontWeight: 700,
      },
      '&.Mui-focusVisible': {
        backgroundColor: '#ffff',
      },
    }),
  );