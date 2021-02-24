import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Header = (props) => {
  const {auth} = props;
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    setUserState(auth);
    console.log("Auth", auth);
  }, [auth]);

  return (
    <div className="container">
      <header>
				<Logo />
        {userState ? (
          <>
            <Navigation />
            <Search onSubmit={props.onSubmit} />
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
