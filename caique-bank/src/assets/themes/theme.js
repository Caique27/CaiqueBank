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
      main: "#f44336",
    },
  },
});
export default theme;
