import React from "react";
import { connect } from "react-redux";
import { setSelectedUser } from "../actions";

class UserCard extends React.Component {
  clickHandler = (selectedUser) => {
    this.props.setSelectedUser(selectedUser);
  };

  render() {
    return (
      <div
        className="ui card four wide column"
        onClick={() => this.clickHandler(this.props)}
      >
        <div className="image">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="user-profile"
          />
        </div>
        <div className="content">
          <div className="header">{this.props.name}</div>
          <div className="meta">Budget: ${this.props.budget}</div>
          <div className="description">{this.props.summary}</div>
        </div>
      </div>
    );
  }
}

export default connect(null, { setSelectedUser })(UserCard);
