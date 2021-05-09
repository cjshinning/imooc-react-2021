import React from 'react';
import {
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import { connect } from 'react-redux';
import { logout } from './Auth.redux';
import App from './App';

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

@connect(
  state => state.Auth,
  { logout },
)
class Dashboard extends React.Component {
  render() {
    const redirectToLogin = <Redirect to="/login"></Redirect>;
    const app = <div>
      <h1>独立团</h1>
      {this.props.isAuth ? <button onClick={this.props.logout}>注销</button> : null}
      <ul>
        <li>
          <Link to="/dashboard/">一营</Link>
        </li>
        <li>
          <Link to="/dashboard/erying">二营</Link>
        </li>
        <li>
          <Link to="/dashboard/qibinglian">骑兵连</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/dashboard/" exact component={App}></Route>
        <Route path="/dashboard/erying" component={Erying}></Route>
        <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
      </Switch>
    </div>;
    return this.props.isAuth ? app : redirectToLogin;
  }
}

export default Dashboard;