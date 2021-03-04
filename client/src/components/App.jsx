import React, { useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";

import Header from "./Elements/Header";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import MyList from "./Pages/MyList";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./Pages/NotFound";

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
        <PrivateRoute path="/mylist" exact component={MyList} />
        <Route component={NotFound} />
      </Switch>
    </>
  );
};

export default connect(null, actions)(App);
