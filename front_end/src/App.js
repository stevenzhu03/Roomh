import React from "react";
import NavBar from "./components/NavBar";
import { Route } from "react-router-dom";
import { connect } from "react-redux";
import Home from "./components/Home";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import FindRoomate from "./components/FindRoomate";
import UserProfile from "./components/UserProfile";
import EditProfile from "./components/EditProfile";
import MatcherProfile from "./components/MatcherProfile";
import MatchPage from "./components/MatchPage";

import { autoLogin } from "./actions";

import "./App.css";

class App extends React.Component {
  componentDidMount() {
    const token = localStorage.token;

    if (token) {
      this.props.autoLogin(token);
    } else {
      this.props.history.push(`/login`);
    }
  }

  render() {
    return (
      <div className="app">
        <NavBar />
        <Route exact path="/" render={() => <Home />} />
        <Route exact path="/login" render={() => <Login history={this.props.history} />} />
        <Route exact path="/signup" render={() => <SignUp history={this.props.history} />} />
        <Route exact path="/find_roommate" render={() => <FindRoomate />} />
        <Route exact path="/user_profile" render={() => <UserProfile />} />
        <Route exact path="/user_profile/edit" render={() => <EditProfile />} />
        <Route exact path="/user/:username" render={() => <MatcherProfile />} />
        <Route exact path="/matches" render={() => <MatchPage />} />
      </div>
    );
  }
}

export default connect(null, { autoLogin })(App);
