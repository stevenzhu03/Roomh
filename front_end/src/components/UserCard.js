import React from 'react'

const UserCard = (props) => {

    return (
        <div className="ui card four wide column">
            <div className="image">
                <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="user-profile"/>
            </div>
            <div className="content">
                <div className="header">{props.name}</div>
                <div className="meta">Friend</div>
                <div className="description">
                {props.summary}
                </div>
            </div>
        </div>
    )
}

export default UserCard