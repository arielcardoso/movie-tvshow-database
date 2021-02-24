import { authenticate } from 'passport';
import React from 'react'

const UserProfile = (props) => {
    return (
        <div className="user-profile">
            <img src={props.auth.avatar} />
            <div className="content">
                <p>Logged as<br/><strong>{props.auth.name}</strong></p>
                <hr/>
                <p><small>{props.auth.email}</small></p>
                <hr/>
                <a className="btn" href="/api/auth/logout">Logout</a>
            </div>
        </div>
    );
}
export default UserProfile;