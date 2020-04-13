import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from '../actions'
import { Link } from 'react-router-dom'

class UserProfile extends React.Component {

  clickHandler = (user_id, matcher_id) => {
    this.props.confirmMatch(user_id, matcher_id)
  }

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div className="user-profile">
        <div className="ui items user-card">
          <div className="item">
            {this.props.currentUser.images.map(image => <img className="image" src={image} />)}
            <div className="content user-summary">
              <h1>{this.props.currentUser.info.name}</h1>
              <p>{this.props.currentUser.info.summary}</p>
              <p>Work Info: {this.props.currentUser.info.work_info}</p>
              <Link to="/user_profile/edit"><button className="ui blue button">Edit Profile</button></Link>
            </div>
          </div>
        </div>

        <div className="ui relaxed list user-additional-info">
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
