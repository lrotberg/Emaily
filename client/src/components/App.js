import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../actions";
import Header from "./Header";

const Bla = () => <h1>HI!!!</h1>;
const Users = () => <h1>Users</h1>;

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Switch>
          <Route exact path="/" component={Bla} />
          <Route exact path="/users" component={Users} />
        </Switch>
      </div>
    );
  }
}

// const App = () => (
//   <div className="container">
//     <Header />
//     <Switch>
//       <Route exact path="/" component={Bla} />
//       <Route exact path="/users" component={Users} />
//     </Switch>
//   </div>
// );

export default connect(null, actions)(App);
