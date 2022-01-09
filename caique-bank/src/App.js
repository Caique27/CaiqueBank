import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login.jsx";
import Construcao from "./pages/Construcao.jsx";
import Pagina404 from "./pages/Pagina404/Pagina404.jsx";
import HomeCliente from "./pages/HomeCliente/HomeCliente.jsx";
import { ThemeProvider } from "@mui/material";
import HomeGerente from "./pages/HomeGerente/HomeGerente.jsx";
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
            <HomeCliente />
          </Route>
          <Route path="/gerente/:login">
            <HomeGerente />
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
