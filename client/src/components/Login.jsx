import React from 'react'
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";

const Login = (props) => {
    return props.auth ? 
        <Redirect to="/" />
    : (
        <div className="loginPage" style={{ textAlign: 'center'}}>
            <h1>Movie and TV Show Database</h1>
            <p>App where users can view a huge catalogue of Movies and TvShows, create a personal list, leave likes and comments.</p>
            <br/>
            <a href="/api/auth/google" className="btn" >Log in with Google</a>
        </div>
    )
}

const mapStateToProps = ({ auth : { user }}) => {
  return { auth: user }
}

export default connect(mapStateToProps)(Login);