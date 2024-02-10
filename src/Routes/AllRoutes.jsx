import React from "react";
import {BrowseRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";


function AllRoutes() {
  return (
    <div>
      <Route>
        <Switch>
          <Route path="/Login" Component={Login}/>
          <PrivateRoute path="/Dashboard" Component={Dashboard}/>
          <Route path="/" Component={Home}/>
        </Switch>
      </Route>

    </div>
  );
}

export default AllRoutes;
