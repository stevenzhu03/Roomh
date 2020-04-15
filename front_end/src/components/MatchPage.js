import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";

class MatchPage extends React.Component {

  render() {
    return (
    <div className="match-page">
      <div className="match-pending-requests">

      </div>

      <div className="match-accepted">

      </div>
    </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(MatchPage);
