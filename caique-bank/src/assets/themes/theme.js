import { MuiThemeProvider, createMuiTheme } from "@mui/material";

// Crie seu próprio tema:
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(0, 255, 21, 0.664);",
    },
    secondary: {
      main: "rgb(6, 172, 0)",
    },
    third: {
      main: "#07cf00",
    },
    fourth: {
      main: "#f5f5f5",
    },
  },
  fontFamily: "korataki regular",
});
export default theme;
