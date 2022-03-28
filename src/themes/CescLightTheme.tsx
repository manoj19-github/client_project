import { createTheme } from "@mui/material";

const CescLightTheme = createTheme({
  palette: {
    primary: {
      main: "#283248",
    },
    secondary: {
      main: "#FF661C",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1366,
      xl: 1920,
    },
  },
  typography: {
    fontFamily: '"Source Sans Pro", "sans-serif"',
  },
});

export default CescLightTheme;
