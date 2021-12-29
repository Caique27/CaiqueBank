import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login.jsx";
import Construcao from "./pages/Construcao.jsx";
import Pagina404 from "./pages/Pagina404/Pagina404.jsx";
import { ThemeProvider, createMuiTheme } from "@mui/material";
import theme from "./assets/themes/theme.js";
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>

          <Route path="/cliente/:conta">
            <Construcao />
          </Route>
          <Route path="/gerente">
            <Construcao />
          </Route>
          <Route>
            <Pagina404 />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
