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
import Blogs from "./components/User/Blogs/Blogs";
import ReadBlog from "./components/User/ReadBlog/ReadBlog";

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
          <Blogs />
        </Route>
        <Route path="/society">
          <Blogs />
        </Route>
        <Route path="/policy issue">
          <Blogs />
        </Route>
        <Route path="/governance">
          <Blogs />
        </Route>
        {/* International */}
        <Route path="/global governance">
          <Blogs />
        </Route>
        <Route path="/europe">
          <Blogs />
        </Route>
        <Route path="/north america">
          <Blogs />
        </Route>
        <Route path="/asia">
          <Blogs />
        </Route>
        {/* Public Administration */}
        <Route path="/management">
          <Blogs />
        </Route>
        <Route path="/public policy">
          <Blogs />
        </Route>
        <Route path="/contemporary governance">
          <Blogs />
        </Route>
        {/* Others */}
        <Route path="/knowledge sharing">
          <Blogs />
        </Route>
        <Route path="/idea">
          <Blogs />
        </Route>
        <Route path="/problem solution">
          <Blogs />
        </Route>
        {/* read-blog */}
        <Route path="/blog/:id">
          <ReadBlog />
          {/* admin */}
        </Route>
        <Route path="/post blog">
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
