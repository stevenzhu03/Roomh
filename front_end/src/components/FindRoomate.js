import React from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions";
import Filter from "./Filter"
import { connect } from "react-redux";

class FindRoomate extends React.Component {

  state = {
    gender: "",
    budget: null,
    age: null,
  }

  handleFilter = (property, value) => {
    this.setState({[property]: value})
  }

  componentDidMount() {
    this.props.fetchUsers();
  }

  filterUsers = (users) => {
    let filteredUsers = users
    if(this.state.gender){
      filteredUsers = filteredUsers.filter(user => user.gender === this.state.gender)
    } 
    if(this.state.budget){
      filteredUsers = filteredUsers.filter(user => user.budget <= this.state.budget)
    } 
    if(this.state.age){
      filteredUsers = filteredUsers.filter(user => user.age <= this.state.age)
    }

    return filteredUsers
  }

  render() {
    const filteredUsers = this.filterUsers(this.props.users)

    return (
      this.props.currentUser && (
        <div className="find-roommate">
          <Filter handleFilter={this.handleFilter} />
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
