import React from "react";
import Avatar from "@material-ui/core/Avatar";

const MatchRequestDiv = (props) => {
  const clickHandler = (matcher) => {
    props.setSelectedUser(matcher);
  };

  return (
    <div
      className="match-request-div"
      onClick={() => clickHandler(props.matcher)}
    >
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
    </div>
  );
};

export default MatchRequestDiv;
