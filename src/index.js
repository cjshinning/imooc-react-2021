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
import Auth from './Auth';
import Dashboard from './Dashboard';

let store = createStore(Counter, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
));

ReactDOM.render(
  (<Provider store={store}>
    <Router>
      <div>
        <Switch>
          <Route path="/login" component={Auth}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>), document.getElementById('root')
);
