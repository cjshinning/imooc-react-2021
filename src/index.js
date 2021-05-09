import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { Counter } from './index.redux';
import App from './App';

let store = createStore(Counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

function Erying() {
  return <h2>二营</h2>
}

function Qibinglian() {
  return <h2>骑兵连</h2>
}

class Test extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <h2>测试组件{this.props.match.url}</h2>
    )
  }
}

ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">一营</Link>
          </li>
          <li>
            <Link to="/erying">二营</Link>
          </li>
          <li>
            <Link to="/qibinglian">骑兵连</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/erying" component={Erying}></Route>
          <Route path="/qibinglian" component={Qibinglian}></Route>
          <Route path="/:location" component={Test}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>), document.getElementById('root')
);
