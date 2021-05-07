import React from 'react';
import { addGun } from './index.redux';

class App extends React.Component {
  render() {
    const num = this.props.store.getState();
    return (
      <div>
        <h1>现在有机关枪{num}把</h1>
        <button onClick={() => { this.props.store.dispatch(addGun()) }}>加机关枪</button>
      </div>
    )
  }
}

export default App;