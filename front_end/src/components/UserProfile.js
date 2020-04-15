import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";
import { Link } from "react-router-dom";
import Avatar from "@material-ui/core/Avatar";

class UserProfile extends React.Component {

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
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
            <h1>{this.props.currentUser.info.name}</h1>
            <p>New York, NY</p>
            <p>
              {this.props.currentUser.info.gender.toUpperCase()},{" "}
              {this.props.currentUser.info.age}
            </p>
            <Link to="/user_profile/edit">
              <button className="ui blue button">Edit Profile</button>
            </Link>
          </div>

          <div className="user-info">
            <div className="user-summary">
              <h1> Summary </h1>
              <p> {this.props.currentUser.info.summary} </p>
            </div>

            <div className="user-work-info">
              <h1> Work Info </h1>
              <p> {this.props.currentUser.info.work_info} </p>
            </div>
          </div>
        </div>

        <div className="user-additional-info">
          <div className="user-photos-container">
            <div className="user-photos-heading">
              <h1>User Photos</h1>
            </div>

            <div className="user-photos">
              {this.props.currentUser.images.map((image) => (
                <img className="image" src={image} alt="user_photo" />
              ))}
            </div>
          </div>

          <div className="user-preferences-match">
            <div className="user-preferences">
              <div className="user-roommate-preferences">
                <div className="user-roommate-preferences-heading">
                  <h1>Roommate Preferences</h1>
                </div>
                <div className="user-roommate-preferences-columns">
                  <div className="user-roommate-preferences-column-1">
                    <div className="user-cleaning-preference">
                      <h1>How Often Do You Clean Your Apartment?</h1>
                      <p> {this.props.currentUser.info.cleaning} </p>
                    </div>

                    <div className="user-pets-preference">
                      <h1>How Do You Feel About Pets?</h1>
                      <p> {this.props.currentUser.info.pets} </p>
                    </div>
                  </div>

                  <div className="user-roommate-preferences-column-2">
                    <div className="user-guests-preference">
                      <h1>How Do You Feel About Guests?</h1>
                      <p> {this.props.currentUser.info.guests} </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="user-moving-preferences">
                <div className="user-moving-preferences-heading">
                  <h1>Moving Preferences</h1>
                </div>
                <div className="user-moving-preferences-columns">
                  <div className="user-moving-preferences-column-1">
                    <div className="user-cleaning-preference">
                      <h1>Preferred Location</h1>
                      <p> New York City </p>
                    </div>

                    <div className="user-pets-preference">
                      <h1>Budget</h1>
                      <p> $ {this.props.currentUser.info.budget} </p>
                    </div>
                  </div>

                  <div className="user-moving-preferences-column-2">
                    <div className="user-guests-preference">
                      <h1>Preferred Move-In Date</h1>
                      <p> {this.props.currentUser.info.move_in_date} </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="user-recent-match">
              <div className="user-recent-match-heading">
                <h1>Recent Matches</h1>
              </div>

              <div className="recent-matches">
              <Link to="/matches">
              <button className="ui blue button">View All Matches</button>
              </Link>
                {this.props.currentUser.matches
                  .slice(Math.max(this.props.currentUser.matches.length - 3, 0))
                  .map((user) => (
                    <div className="match-strip">{user.name}</div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(UserProfile);

{
  /* <div className="ui relaxed list user-additional-info">
          <div className="item">
            <div className="content">
              <a className="header">Budget</a>
              <div className="description">
                {this.props.currentUser.info.budget}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Cleaning</a>
              <div className="description">
                {this.props.currentUser.info.cleaning}
              </div>
            </div>
          </div>
          <div className="item">
            <div className="content">
              <a className="header">Guests</a>
              <div className="description">
                {this.props.currentUser.info.guests}
              </div>
            </div>
          </div>
        </div>

        <div className="user-match-feed">
          <div className="ui feed match-requests">
            <h1 className="ui header">Match Requests</h1>
            {this.props.currentUser.match_requests.map((user) => (
              <div className="event">
                <span>{user.name}</span>
                <button onClick={() => this.clickHandler(this.props.currentUser.info.id, user.id)} className="ui small button">Accept</button>
                </div>
            ))}
          </div>
          <div className="ui feed pending-matches">
            <h1 className="ui header">Pending Matches</h1>
            {this.props.currentUser.pending_matches.map((user) => (
              <div className="event">{user.name}</div>
            ))}
          </div>

          <div className="ui feed accepted-matches">
            <h1 className="ui header">Matches</h1>
            {this.props.currentUser.matches.map((user) => (
              <div className="event">{user.name}</div>
            ))}
          </div> */
}
