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
            src={this.props.image}
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
