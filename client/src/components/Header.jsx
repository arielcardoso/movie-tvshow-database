import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "./Logo";
import Navigation from "./Navigation";
import Search from "./Search";
import UserProfile from "./UserProfile";

const Header = ({ auth }) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    setUserState(auth);
    console.log("Auth", auth);
  }, [auth]);
  return (
    <div className="container">
      <header className="Header">
				<Logo />
        {userState ? (
          <>
            <Navigation />
            <Search onSubmit={this.props.onSubmit} />
            <UserProfile />
            <a href="/api/auth/logout">Logout</a>
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
