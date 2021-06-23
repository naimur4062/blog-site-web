import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/User/Home/Home";
import NavBar from "./components/User/NavBar/NavBar";
import NotFound from "./components/User/NotFound/NotFound";
import Admin from "./components/Admin/Admin/Admin";

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
