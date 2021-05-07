import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Counter, addGun, removeGun, addGunAsync } from './index.redux';
import App from './App';

let store = createStore(Counter, applyMiddleware(thunk));

function render() {
  ReactDOM.render(<App store={store} addGun={addGun} removeGun={removeGun} addGunAsync={addGunAsync} />, document.getElementById('root'));
}

render();
store.subscribe(render);