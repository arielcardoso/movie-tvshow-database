import React from 'react'

const UserProfile = (props) => {
    return (
        <div className="UserProfile">
            <div className="User">
                <div className="name">Username</div>
                <div className="email">email@email.com</div>
                <div className="image"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/profile/profile-512_1.jpg" /></div>
            </div>
            <div className="UserProfile-menu">
                <div className="UserNavigation">
                    <ul>
                        <li>Profile</li>
                        <li>Sign out</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default UserProfile;