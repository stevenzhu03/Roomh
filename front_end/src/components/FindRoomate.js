import React from "react";
import UserCard from "./UserCard";
import { fetchUsers } from "../actions";
import { connect } from "react-redux";

class FindRoomate extends React.Component {

  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    
    return (
      this.props.currentUser && (
      <div className="ui four stackable cards">
        {this.props.users.filter(user => user.id !== this.props.currentUser.info.id).map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
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
