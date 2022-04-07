import React from "react";
import Search from "pages/search";
import Trending from "pages/trending";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Nav = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
        <br></br>

        <Switch>
          <Route path="/search">
            <Search />
          </Route>
          <Route path="/">
            <Trending />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export { Nav };