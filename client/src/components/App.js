import React, { useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Header from "./Header";
import Landing from "./Landing";

const App = props => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/users" component={Users} /> */}
      </Switch>
    </div>
  );
};

export default connect(null, actions)(App);
