import React from 'react';
import { connect } from 'react-redux';
import { login } from './Auth.redux';
import {
  Redirect
} from "react-router-dom";

@connect(
  state => state.Auth,
  { login },
)
class Auth extends React.Component {
  render() {
    return (
      <div>
        {this.props.isAuth ? <Redirect to="/dashboard" /> : null}
        <h2>您还没有权限，需求登录才能查看</h2>
        <button onClick={this.props.login}>登录</button>
      </div>
    )
  }
}

export default Auth;