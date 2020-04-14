import React from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions";
import Filter from "./Filter"
import { connect } from "react-redux";

class FindRoomate extends React.Component {

  state = {
    sex: "",
    budget: null,
    age: null,
  }

  handleGender = (value) => {
    this.setState({sex: value})
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  filterUsers = (users) => {
    if(this.state.sex){
      const filterSex = users.filter(user => user.sex === this.state.sex)
      return filterSex
    }

    return users
  }

  render() {
    const filteredUsers = this.filterUsers(this.props.users)

    return (
      this.props.currentUser && (
        <div className="find-roommate">
          <Filter handleGender={this.handleGender}/>
          <div className="ui four stackable cards">
            {filteredUsers.filter(user => user.id !== this.props.currentUser.info.id).map((user) => (
              <UserCard key={user.id} {...user} />
            ))}
          </div>
        </div>
      )
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    currentUser: state.auth.currentUser,
  };
};

export default connect(mapStateToProps, { fetchUsers })(FindRoomate);
