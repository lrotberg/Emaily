import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Payments from "./Payments";

const mapStateToProps = ({ auth }) => ({ auth });

const renderContent = auth => {
  switch (auth) {
    case null:
      return;
    case false:
      return (
        <li>
          <a href="/auth/google">Login With Google</a>
        </li>
      );
    default:
      return (
        <>
          <li>
            <Payments />
          </li>
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        </>
      );
  }
};

const Header = props => (
  <nav>
    <div className="nav-wrapper">
      <Link className="left brand-logo" to={props.auth ? "/surveys" : "/"}>
        Emaily
      </Link>
      <ul className="right">{renderContent(props.auth)}</ul>
    </div>
  </nav>
);

export default connect(mapStateToProps)(Header);
