import { MuiThemeProvider, createTheme } from "@mui/material";

// Crie seu próprio tema:
const theme = createTheme({
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
    fifth: {
      main: "#a6a6a6",
    },
  },
});
export default theme;
