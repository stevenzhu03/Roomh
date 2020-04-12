import React from "react";
import { connect } from "react-redux";
import { createMatch } from "../actions";

class MatcherProfile extends React.Component {
  clickHandler = (user_id, matcher_id) => {
    this.props.createMatch(user_id, matcher_id);
  };

  render() {
    return (
      // !this.props.selectedUser ? <div>Loading ...</div>:
      <div className="user-profile">
        <div className="ui items user-card">
          <div className="item">
            <img
              className="image"
              src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png"
              alt="user-profile"
            />
            <div className="content user-summary">
              <h1>{this.props.selectedUser.name}</h1>
              <p>{this.props.selectedUser.summary}</p>
              <p>Work Info: {this.props.selectedUser.work_info}</p>
              <button
                className="ui active green button"
                onClick={() =>
                  this.clickHandler(
                    this.props.currentUser.info.id,
                    this.props.selectedUser.id
                  )
                }
              >
                Request Match
              </button>
            </div>
          </div>
        </div>

        <div className="ui relaxed list user-additional-info">
          <div className="item">
            <div className="content">
              <a className="header">Budget</a>
              <div className="description">
                {this.props.selectedUser.budget}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Cleaning</a>
              <div className="description">
                {this.props.selectedUser.cleaning}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Guests</a>
              <div className="description">
                {this.props.selectedUser.guests}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.auth.currentUser,
    selectedUser: state.users.selectedUser,
  };
};

export default connect(mapStateToProps, { createMatch })(MatcherProfile);
