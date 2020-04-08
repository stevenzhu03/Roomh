import React from 'react';
import UserCard from './UserCard'
import { fetchUsers } from '../actions'
import { connect } from 'react-redux';

class FindRoomate extends React.Component {

    
    componentDidMount () {
        console.log(this.props.currentUser)
        this.props.fetchUsers(this.props.currentUser)
    }
    
    render () {
        return (
            // !this.props.currentUser ? <div>LOADING...</div> : (    
            <div className="ui grid container">
                {this.props.users.map(user => <UserCard key={user.id} {...user} />)}
            </div>
            
        ) 
    }

}

const mapStateToProps = state => {
    return {
        users: state.users.users,
        currentUser: state.auth.currentUser
    }
}

export default connect(mapStateToProps, {fetchUsers})(FindRoomate)