import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import App from './App';

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <div>
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
            <Route path="/dashboard" component={App}></Route>
            <Route path="/dashboard/erying" component={Erying}></Route>
            <Route path="/dashboard/qibinglian" component={Qibinglian}></Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default Dashboard;