import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./components/User/Home/Home";
import About from "./components/Admin/About/About";
import NavBar from "./components/User/NavBar/NavBar";
import NotFound from "./components/User/NotFound/NotFound";
import PostBlog from "./components/Admin/PostBlog/PostBlog";
import Admin from "./components/Admin/Admin/Admin";
import Blogs from "./components/User/Blogs/Blogs";
import ReadBlog from "./components/User/ReadBlog/ReadBlog";
import DeleteBlogs from "./components/Admin/DeleteBlogs/DeleteBlogs";
import { createContext, useState } from "react";

export const AdminContext = createContext();
export const UserContext = createContext();

function App() {
  const [user, setUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <AdminContext.Provider value={[isAdmin, setIsAdmin]}>
      <UserContext.Provider value={[user, setUser]}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/about">
              <About />
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
            </Route>
            {/* admin */}
            <Route path="/make admin">
              <Admin />
            </Route>
            <Route path="/post blog">
              <PostBlog />
            </Route>
            {/* delete */}
            <Route path="/delete politics">
              <DeleteBlogs />
            </Route>
            <Route path="/delete society">
              <DeleteBlogs />
            </Route>
            <Route path="/delete policy issue">
              <DeleteBlogs />
            </Route>
            <Route path="/delete governance">
              <DeleteBlogs />
            </Route>
            {/* International */}
            <Route path="/delete global governance">
              <DeleteBlogs />
            </Route>
            <Route path="/delete europe">
              <DeleteBlogs />
            </Route>
            <Route path="/delete north america">
              <DeleteBlogs />
            </Route>
            <Route path="/delete asia">
              <DeleteBlogs />
            </Route>
            {/* Public Administration */}
            <Route path="/delete management">
              <DeleteBlogs />
            </Route>
            <Route path="/delete public policy">
              <DeleteBlogs />
            </Route>
            <Route path="/delete contemporary governance">
              <DeleteBlogs />
            </Route>
            {/* Others */}
            <Route path="/delete knowledge sharing">
              <DeleteBlogs />
            </Route>
            <Route path="/delete idea">
              <DeleteBlogs />
            </Route>
            <Route path="/delete problem solution">
              <DeleteBlogs />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </AdminContext.Provider>
  );
}

export default App;
