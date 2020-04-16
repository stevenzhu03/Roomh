import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";

import { logOut } from "../actions";

const NavBar = (props) => {
  return (
    <div className="navbar">
      <NavLink to="/">
        <div className="navheader">
          <img
            src={require("../assets/ROOMH_Picture_Blue.svg")}
            alt="logo"
            className="header-image"
          />
          <img
            src={require("../assets/ROOMH_Title_Blue.svg")}
            alt="logo"
            className="header-title"
          />
        </div>
      </NavLink>

      <div className="navlinks">
        {props.currentUser ? (
          <span className="user">
            <Link to="/find_roommate">Find a Roommate</Link>
            Welcome!
            <Link to="/user_profile">{props.currentUser.info.username}</Link>
            <button className="ui small gray button" onClick={props.logOut}> Log Out </button>
          </span>
        ) : (
          <span className="login-signup">
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/signup">Sign Up</NavLink>
          </span>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { logOut })(NavBar);
