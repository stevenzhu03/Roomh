import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { logOut } from '../actions'

const NavBar = (props) => {

    return (
        <div className="navbar">
            <NavLink to="/">
                <div className="navheader">
                    <img src={require('../assets/ROOMH_Picture_Blue.svg')} alt="logo" className="header-image"/>
                    <img src={require('../assets/ROOMH_Title_Blue.svg')} alt="logo" className="header-title"/>
                </div>
            </NavLink>

            <div className="navlinks">
                {props.login.currentUser ? 
                    <span className="user">
                        Welcome!
                        <Link to="/profile">
                        {props.login.currentUser.username}
                        </Link>
                        <button onClick={props.logOut}> Log Out </button>
                    </span>
                    :
                    <span className="login-signup">
                        <NavLink to="/login">Log In</NavLink>
                        <NavLink to="/signup">Sign Up</NavLink>
                    </span>
                }
            </div>
        </div>
    )
    
}

const mapStateToProps = state => {
    return {login: state.auth}
}

export default connect(mapStateToProps, { logOut })(NavBar)