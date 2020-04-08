import React from 'react';
import { connect } from 'react-redux'

class UserProfile extends React.Component {

    render() {
        console.log(this.props)
        return (
            // !this.props.currentUser ? <div>Loading ...</div>:
            <div className="user-profile">
                <div className="ui items user-card">
                    <div className="item">
                        <img className="image" src="https://cdn2.iconfinder.com/data/icons/avatar-profile/449/avatar_user_default_contact_profile_male-512.png" alt="user-profile"/>
                        <div className="content user-summary">
                            <h1>{this.props.currentUser.name}</h1>
                            <p>{this.props.currentUser.summary}</p>
                            <p>Work Info: {this.props.currentUser.work_info}</p>
                        </div>
                    </div>
                </div>

                <div className="ui relaxed list user-additional-info">
                    <div className="item">
                        <div className="content">
                            <a className="header">Budget</a>
                            <div className="description">{this.props.currentUser.budget}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <a className="header">Cleaning</a>
                            <div className="description">{this.props.currentUser.cleaning}</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="content">
                            <a className="header">Guests</a>
                            <div className="description">{this.props.currentUser.guests}</div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {currentUser: state.auth.currentUser}
}

export default connect(mapStateToProps)(UserProfile)