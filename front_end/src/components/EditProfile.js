import React from "react";
import { connect } from "react-redux";
import { confirmMatch } from "../actions";
import ImageUploader from "./ImageUploader";

class EditProfile extends React.Component {
  state = {
      name: this.props.currentUser.info.name, 
      summary: this.props.currentUser.info.name,
      image: null
  };



  clickHandler = (event) => {
    
    let formdata = new FormData();
    formdata.append("image", this.state.image)

    fetch(`http://localhost:3000/user/${this.props.currentUser.info.id}/upload_img`, {
        method: "POST",
        // headers: {
        //     'Content-Type': 'multipart/form-data',
        // },
        body: formdata
    })
  }

  selectImage = (image) => {
    this.setState({image})
  }

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div>
        <ImageUploader selectImage={this.selectImage} />
        <button onClick={this.clickHandler}>Submit</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { confirmMatch })(EditProfile);
