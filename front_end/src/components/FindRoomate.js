import React from 'react';
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';

class UserContainer extends React.Component {

    componentDidMount () {
        this.props.fetchUsers()
    }

    render () {
        return (
            <div className="users-list">
                {this.props.users.map(user => <div>{user.name} {user.email}</div>)}
            </div>
        ) 
    }

}

const mapStateToProps = state => {
    return {users: state.users}
}

export default connect(mapStateToProps, {fetchUsers})(UserContainer)