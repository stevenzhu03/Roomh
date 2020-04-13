import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";

class EditProfile extends React.Component {
  state = {
      name: this.props.currentUser.info.name, 
      summary: this.props.currentUser.info.name
  };

  clickHandler = (user_id, matcher_id) => {
    this.props.confirmMatch(user_id, matcher_id);
  };

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div>
        <input type="file" name="myImage" onChange= {this.onChange} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(EditProfile);
