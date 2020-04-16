import React from "react";
import Avatar from "@material-ui/core/Avatar";


const MatchRequestDiv = (props) => {
  return (
    <div className="match-request-div">
      <div className="match-request-avatar">
        <Avatar
          style={{
            margin: "10px",
            width: "50px",
            height: "50px",
          }}
          // src={this.props.currentUser.images[0]}
        />
      </div>

      <div className="match-request-name">
        <p>{props.matcher.name}</p>
      </div>
      <button
        onClick={() =>
          props.clickHandler(props.user_id, props.matcher.id)
        }
        className="ui green small button"
      >
        Accept
      </button>
    </div>
  );
};

export default MatchRequestDiv;
