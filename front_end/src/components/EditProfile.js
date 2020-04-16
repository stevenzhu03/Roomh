import React from "react";
import { connect } from "react-redux";
import { updateUser } from "../actions";
import { updateImages } from "../actions"
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import ImageUploader from "./ImageUploader";


class EditProfile extends React.Component {
  state = {
    name: this.props.currentUser.info.name,
    email: this.props.currentUser.info.email,
    work_info: this.props.currentUser.info.work_info,
    summary: this.props.currentUser.info.summary,
    cleaning: this.props.currentUser.info.cleaning,
    guests: this.props.currentUser.info.guests,
    schedule: this.props.currentUser.info.schedule,
    pets: this.props.currentUser.info.pets,
    budget: this.props.currentUser.info.budget,

    image: null,
  };

  cleaning = [
    { value: "Every Few Days" },
    { value: "Once a Week" },
    { value: "Every Few Weeks" },
    { value: "Once a Month" },
  ];

  guests = [
    { value: "Fine With Having Guests" },
    { value: "Not Fine with Guests" },
  ];

  schedule = [
    { value: "I Sleep Early" },
    { value: "I Sleep Late" },
    { value: "I Work Late" },
    { value: "In Bed By 12" },
  ];

  pets = [
    { value: "I Do Have a Pet(s)" },
    { value: "I Have No Pets" },
    { value: "No Pet, But Fine Living With Them" },
    { value: "No Pets, Please" },
  ];

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    fetch(`http://localhost:3000/users/${this.props.currentUser.info.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        work_info: this.state.work_info,
        summary: this.state.summary,
        cleaning: this.state.cleaning,
        guests: this.state.guests,
        schedule: this.state.schedule,
        pets: this.state.pets,
        budget: this.state.budget,
      }),
    })
      .then((resp) => resp.json())
      .then((user) => {
        this.props.updateUser(user);
      });
  };

  clickHandler = (event) => {
    event.preventDefault()
    let formdata = new FormData();
    formdata.append("image", this.state.image);

    fetch(
      `http://localhost:3000/user/${this.props.currentUser.info.id}/upload_img`,
      {
        method: "POST",
        body: formdata,
      }
    )
    .then(resp => resp.json())
    .then(images => this.props.updateImages(images))
  };

  selectImage = (image) => {
    this.setState({ image });
  };

  render() {
    return !this.props.currentUser ? (
      <div>Loading ...</div>
    ) : (
      <div className="user-edit-form">
        <div className="edit-form-container">
          <form>
            <div className="image-uploader">
              <h1>Upload Image</h1>
              <ImageUploader selectImage={this.selectImage} />
              <button className="ui blue button" onClick={this.clickHandler}>Upload Image</button>
            </div>

            <div className="edit-user-info">
              <h1> Edit User Information </h1>
              <div className="edit-user-name-work">
                <div className="edit-user-name">
                  <InputLabel>Name</InputLabel>
                  <TextField
                    id="outlined-name"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </div>

                <div className="edit-user-name">
                  <InputLabel>Work Info</InputLabel>
                  <TextField
                    id="outlined-work-info"
                    name="work_info"
                    value={this.state.work_info}
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </div>

                <div className="edit-user-email">
                  <InputLabel>Email</InputLabel>
                  <TextField
                    id="outlined-email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    variant="outlined"
                  />
                </div>
              </div>

              <div className="edit-user-summary">
                <InputLabel>Summary</InputLabel>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={5}
                  name="summary"
                  value={this.state.summary}
                  variant="outlined"
                  inputProps={{ maxLength: 500 }}
                  helperText="Character Limit of 500"
                />
              </div>
            </div>

            <div className="edit-user-roommate-preferences">
              <h1> Edit Roommate Preferences </h1>
              <InputLabel>How Often Do You Clean?</InputLabel>
              <TextField
                select
                name="cleaning"
                value={this.state.cleaning}
                onChange={this.handleChange}
                variant="outlined"
              >
                {this.cleaning.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <InputLabel>How Do You Feel About Guests?</InputLabel>
              <TextField
                select
                name="guests"
                value={this.state.guests}
                onChange={this.handleChange}
                variant="outlined"
              >
                {this.guests.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <InputLabel>How Do You Feel About Pets?</InputLabel>
              <TextField
                select
                name="pets"
                value={this.state.pets}
                onChange={this.handleChange}
                variant="outlined"
              >
                {this.pets.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>

              <InputLabel>What Is Your Schedule Like?</InputLabel>
              <TextField
                select
                name="schedule"
                value={this.state.schedule}
                onChange={this.handleChange}
                variant="outlined"
              >
                {this.schedule.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            </div>

            <div className="edit-user-moving-preferences">
              <h1> Edit Moving Preferences </h1>
              <InputLabel>Budget</InputLabel>
              <TextField
                name="budget"
                id="outlined-budget"
                type="number"
                onChange={this.handleChange}
                value={this.state.budget}
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
              />
            </div>

            <button className="ui blue button" type="submit" onClick={this.handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.auth.currentUser };
};

export default connect(mapStateToProps, { updateUser, updateImages })(EditProfile);
