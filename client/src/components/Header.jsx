import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Header = ({ auth }) => {
  const [userState, setUserState] = useState(null);

  useEffect(() => {
    setUserState(auth);
    console.log("Auth", auth);
  }, [auth]);
  return (
    <div className="container">
      <nav>
        <Link to="/" className="brand-logo">
          MTSDB
        </Link>
        <ul className="nav-menu">
          {userState ? (
            <li>
              <a href="/api/auth/logout">Logout</a>
            </li>
          ) : (
            <li>
              <a href="/api/auth/google">Login with Google</a>
            </li>
          )}
        </ul>
      </nav>
    </div>
  );

};

const mapStateToProps = ({ auth: { user }}) => {
  return { auth: user };
};

export default connect(mapStateToProps)(Header);
