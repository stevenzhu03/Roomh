import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";
import MatchRequestDiv from "./MatchRequestDiv"

class MatchPage extends React.Component {
  clickHandler = (user_id, matcher_id) => {
    this.props.confirmMatch(user_id, matcher_id);
  };



  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div className="match-page">
        <div className="match-pending-requests">
          <div className="match-requests">
            <h1 className="ui header">Match Requests</h1>
            {this.props.currentUser.match_requests.map((user) => (
              <MatchRequestDiv clickHandler={this.clickHandler} user_id={this.props.currentUser.info.id} matcher={user}/>
            ))}
          </div>

          <div className="match-pending">
            <h1 className="ui header">Pending Matches</h1>
            {this.props.currentUser.pending_matches.map((user) => (
              <div className="event">{user.name}</div>
            ))}
          </div>
        </div>

        <div className="match-accepted">
          <h1 className="ui header">Matches</h1>
          {this.props.currentUser.matches.map((user) => (
            <div className="event">{user.name}</div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(MatchPage);
