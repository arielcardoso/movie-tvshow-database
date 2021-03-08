import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Logo from "./Logo";
import Navigation from "./Navigation";
import UserProfile from "./UserProfile";

const Header = (props) => {
  const {auth} = props;
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    setUserState(auth);
  }, [auth]);

  return (
    <div className="container">
      <header>
				<Logo />
        {userState ? (
          <>
            <Navigation />
            <UserProfile auth={auth} />
          </>
        ) : (
          <a className="btn" href="/api/auth/google">Sign in</a>
        )}
			</header>
    </div>
  );

};

const mapStateToProps = ({ auth: { user }}) => {
  return { auth: user };
};

export default connect(mapStateToProps)(Header);
