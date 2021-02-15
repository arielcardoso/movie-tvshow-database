import React from 'react'
import {Redirect} from "react-router-dom"
import { connect } from "react-redux";

const Login = (props) => {
    return props.auth ? 
        <Redirect to="/" />
    : (
        <div style={{ textAlign: 'center'}}>
            <h1>MTSDB</h1>
            <p>App where users can view a huge catalogue of Movies and TvShows, create a personal list, leave likes and comments.</p>
            <a href="/api/auth/google" className="btn" >LOGIN IN WITH GOOGLE</a>
        </div>
    )
}

const mapStateToProps = ({ auth : { user }}) => {
  return { auth: user }
}

export default connect(mapStateToProps)(Login);