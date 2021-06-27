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
        {/* Bangladesh */}
        <Route path="/politics">
          <Home />
        </Route>
        <Route path="/society">
          <Home />
        </Route>
        <Route path="/policy issue">
          <Home />
        </Route>
        <Route path="/governance">
          <Home />
        </Route>
        {/* International */}
        <Route path="/global governance">
          <Home />
        </Route>
        <Route path="/europe">
          <Home />
        </Route>
        <Route path="/north america">
          <Home />
        </Route>
        <Route path="/asia">
          <Home />
        </Route>
        {/* Public Administration */}
        <Route path="/management">
          <Home />
        </Route>
        <Route path="/public policy">
          <Home />
        </Route>
        <Route path="/contemporary government">
          <Home />
        </Route>
        {/* Others */}
        <Route path="/knowledge sharing">
          <Home />
        </Route>
        <Route path="/idea">
          <Home />
        </Route>
        <Route path="/problem solution">
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
