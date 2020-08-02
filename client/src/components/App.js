import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";
import Dashboard from "./Dashboard";

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/surveys" component={Dashboard} />
      </Switch>
    </div>
  );
};

export default connect(null, actions)(App);
