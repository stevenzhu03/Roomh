import React from "react";
import { NavLink, Link } from "react-router-dom";
import { connect } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
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
          <div className="user-nav">
            <div className="user-nav-find-roommate">
              <Link
                style={{
                  fontSize: "25px",
                  color: "#808080",
                  fontWeight: "bold",
                  fontFamily: "Open Sans"
                }}
                to="/find_roommate"
              >
                Find a Roommate
              </Link>
            </div>

            <div className="user-nav-info">
              <div className="user-nav-info-heading">
                <h1>Welcome!</h1>
              </div>

              <div className="user-nav-info-avatar">
                <Link to="/user_profile">
                  <Avatar
                    style={{
                      margin: "10px",
                      width: "40px",
                      height: "40px",
                    }}
                    src={props.currentUser.images[0]}
                  />
                </Link>
              </div>

              <div className="user-nav-info-logout">
                <button className="ui small gray button" onClick={props.logOut}>
                  {" "}
                  Log Out{" "}
                </button>
              </div>
            </div>
          </div>
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
