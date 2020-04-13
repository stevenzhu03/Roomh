import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";

class EditProfile extends React.Component {
  state = {
      name: this.props.currentUser.info.name, 
      summary: this.props.currentUser.info.name,
  };

  clickHandler = (user_id, matcher_id) => {
    this.props.confirmMatch(user_id, matcher_id);
  };

  changeHandler = (event) => {
    let formdata = new FormData();
    formdata.append("image", event.target.files[0])

    fetch(`http://localhost:3000/user/${}/upload_img`, {
        method: "POST",
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        body: formdata
    })
  }

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div>
        <input type="file" name="ui file" onChange= {this.changeHandler} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(EditProfile);
