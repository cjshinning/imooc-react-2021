import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Reducer from './reducer';
import './config';
import Login from './container/login/login';
import Register from './container/register/register';
import AuthRoute from './component/authroute/authroute';
import BossInfo from './container/bossinfo/bossinfo';
import GeniusInfor from './container/geniusinfo/geniusinfo';
import Dashboard from './component/dashboard/dashboard';
import Chat from './component/chat/chat';
import './index.css';
// import Demo from './demo';
import './01.learn.redux';

// ReactDOM.render(<Demo />, document.getElementById('root'));

// let store = createStore(Reducer, compose(
//   applyMiddleware(thunk),
//   window.devToolsExtension ? window.devToolsExtension() : f => f
// ));

// // booss genius me msg 4个页面
// ReactDOM.render(
//   (<Provider store={store}>
//     <Router>
//       <div>
//         <AuthRoute></AuthRoute>
//         <Switch>
//           <Route path="/bossinfo" component={BossInfo}></Route>
//           <Route path="/geniusinfo" component={GeniusInfor}></Route>
//           <Route path="/login" component={Login}></Route>
//           <Route path="/register" component={Register}></Route>
//           <Route path="/chat/:user" component={Chat}></Route>
//           <Route component={Dashboard}></Route>
//         </Switch>
//       </div>
//     </Router>
//   </Provider>), document.getElementById('root')
// );
