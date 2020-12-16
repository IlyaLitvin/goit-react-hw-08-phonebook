import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import routes from "../routes.js";
import { connect } from "react-redux";

class HomeView extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
    return;
  }

  componentDidUpdate() {
    if (this.props.isAuthenticated) {
      this.props.history.replace("/contacts");
    }
    return;
  }
  render() {
    return (
      <div>
        <h1>Home page</h1>
        <NavLink to={routes.LoginView}>Login</NavLink>
        <NavLink to={routes.RegisterView}>Register</NavLink>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, null)(HomeView);
