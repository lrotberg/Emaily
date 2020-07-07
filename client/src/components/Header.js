import React, { Component } from "react";
import { connect } from "react-redux";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
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
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo" href="/">
            Emaily
          </a>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

// const Header = () => {
//   return (
//     <nav>
//       <div className="nav-wrapper">
//         <a className="left brand-logo">Emaily</a>
//         <ul className="right">
//           <li>
//             <a>Login With Google</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps)(Header);
