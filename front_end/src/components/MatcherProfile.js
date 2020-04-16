import React from "react";
import { connect } from "react-redux";
import { createMatch } from "../actions";
// import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class MatcherProfile extends React.Component {

  
  clickHandler = (user_id, matcher_id) => {
    this.props.createMatch(user_id, matcher_id);
  };

  render() {
    return (
      // !this.props.selectedUser ? <div>Loading ...</div>:
      <div className="user-profile">
        <div className="user-banner">
          <div className="user-name-image">
            <Avatar
              style={{
                margin: "10px",
                width: "180px",
                height: "180px",
              }}
              src={this.props.currentUser.images[0]}
            />
            <h1>{this.props.selectedUser.name}</h1>
            <p>New York, NY</p>
            <p>
              {this.props.selectedUser.gender.toUpperCase()},{" "}
              {this.props.selectedUser.age}
            </p>
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

          <div className="user-info">
            <div className="user-summary">
              <h1> Summary </h1>
              <p> {this.props.selectedUser.summary} </p>
            </div>

            <div className="user-work-info">
              <h1> Work Info </h1>
              <p> {this.props.selectedUser.work_info} </p>
            </div>
          </div>
        </div>

        <div className="user-additional-info">
          <div className="user-photos-container">
            <div className="user-photos-heading">
              <h1>User Photos</h1>
            </div>

            <div className="user-photos">
              {/* {this.props.selectedUser.images.map((image) => (
                <img className="image" src={image} alt="user_photo" />
              ))} */}
            </div>
          </div>

          <div className="matcher-preferences">
            <div className="matcher-roommate-preferences">
              <div className="matcher-roommate-preferences-heading">
                <h1>Roommate Preferences</h1>
              </div>
              <div className="user-roommate-preferences-columns">
                <div className="user-roommate-preferences-column-1">
                  <div className="user-cleaning-preference">
                    <h1 className="preferences-heading">
                      How Often Do You Clean Your Apartment?
                    </h1>
                    <p> {this.props.currentUser.info.cleaning} </p>
                  </div>

                  <div className="user-pets-preference">
                    <h1 className="preferences-heading">
                      How Do You Feel About Pets?
                    </h1>
                    <p> {this.props.currentUser.info.pets} </p>
                  </div>
                </div>

                <div className="user-roommate-preferences-column-2">
                  <div className="user-guests-preference">
                    <h1 className="preferences-heading">
                      How Do You Feel About Guests?
                    </h1>
                    <p> {this.props.currentUser.info.guests} </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="matcher-moving-preferences">
              <div className="matcher-moving-preferences-heading">
                <h1>Moving Preferences</h1>
              </div>
              <div className="user-moving-preferences-columns">
                <div className="user-moving-preferences-column-1">
                  <div className="user-cleaning-preference">
                    <h1 className="preferences-heading">Preferred Location</h1>
                    <p> New York City </p>
                  </div>

                  <div className="user-pets-preference">
                    <h1 className="preferences-heading">Budget</h1>
                    <p> $ {this.props.currentUser.info.budget} </p>
                  </div>
                </div>

                <div className="user-moving-preferences-column-2">
                  <div className="user-guests-preference">
                    <h1 className="preferences-heading">
                      Preferred Move-In Date
                    </h1>
                    <p> {this.props.currentUser.info.move_in_date} </p>
                  </div>
                </div>
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
