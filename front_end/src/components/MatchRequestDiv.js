import React from "react";

const MatchRequestDiv = (props) => {
  return (
    <div className="match-request-div">
      <span>{props.matcher.name}</span>
      <button
        onClick={() =>
          props.clickHandler(props.user_id, props.matcher.id)
        }
        className="ui small button"
      >
        Accept
      </button>
    </div>
  );
};

export default MatchRequestDiv;
