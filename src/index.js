import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Counter } from './index.redux';
import App from './App';

let store = createStore(Counter);

function render() {
  ReactDOM.render(<App store={store} />, document.getElementById('root'));
}

render();
store.subscribe(render);