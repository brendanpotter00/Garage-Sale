import Topbar from './Components/topbar/TopBar';
import Header from './Components/header/Header';
import Homepage from './pages/home/Home'
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";

import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const currentUser = false;
  return (
    <Router>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <div className="page1">
            <Homepage />
          </div>
        </Route>
        <Route path="/posts">
          <div className="page1">
            <Homepage />
          </div>
        </Route>
        <Route exact path="/about">
          <div className="page1">
            <About />
          </div>
        </Route>
        <Route exact path="/contact">
          <div className="page1">
            <Contact />
          </div>
        </Route>
        <Route path="/register">
          {currentUser ? <Homepage /> : <Register />}
        </Route>
        <Route path="/login">{currentUser ? <Homepage /> : <Login />}</Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write">{currentUser ? <Write /> : <Login />}</Route>
        <Route path="/settings">
          {currentUser ? <Settings /> : <Login />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
