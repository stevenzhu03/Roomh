import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {

        return (
            <div className="navbar">

                <div className="navheader">
                <img src={require('../assets/ROOMH_Picture_Blue.svg')} alt="logo" className="header-image"/>
                <img src={require('../assets/ROOMH_Title_Blue.svg')} alt="logo" className="header-title"/>
                </div>

                {/* <div className="navlinks">
                <NavLink to="/">Home</NavLink>
                {this.props.currentUser ? 
                <span className="user">
                    Welcome!
                    <Link to="/profile">
                    {this.props.currentUser.username}
                    </Link>
                    <button onClick={this.props.logout}> Log Out </button>
                </span>
                : 
                <span className="login-signup">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/signup">Signup</NavLink>
                </span>
                }
                </div> */}
                
            </div>
        )
    
}

export default NavBar