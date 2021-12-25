import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import Login from "./pages/Login/Login.jsx";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/a">
          <Login />
        </Route>

        <Route path="/cliente/:conta">
          <Login />
        </Route>
        <Route path="/gerente">
          <Login />
        </Route>
        <Route>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
