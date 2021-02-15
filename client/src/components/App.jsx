import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Header";
import Login from "./Login";
import Home from "./Home";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./NotFound";

const App = ({ fetchUser }) => {
  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <>
      <Header />
      <Switch>
        <Route path="/login" exact component={Login} />
        <PrivateRoute path="/" exact component={Home} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default connect(null, actions)(App);
