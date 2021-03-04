import React from 'react'

const UserProfile = (props) => {
    return (
        <div className="user-profile dropdown" >
            <a href="#" role="button" id="btnUserProfile" data-bs-toggle="dropdown" aria-expanded="false">
                <img src={props.auth.avatar} />
            </a>
            <ul className="dropdown-menu mt-3" aria-labelledby="btnUserProfile">
                <li className="dropdown-item" >
                    Logged as<br/><strong>{props.auth.name}</strong>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="dropdown-item">
                    <small>{props.auth.email}</small>
                </li>
                <li>
                    <hr className="dropdown-divider"/>
                </li>
                <li className="dropdown-item d-grid">
                    <a className="btn btn-block" href="/api/auth/logout">Logout</a>
                </li>
            </ul>
        </div>
    );
}
export default UserProfile;