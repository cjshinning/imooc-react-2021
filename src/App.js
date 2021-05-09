import React from 'react';
import { connect } from 'react-redux';
import { addGun, removeGun, addGunAsync } from './index.redux';

@connect(
  // 需要的属性放到props
  state => ({ num: state }),
  // 需要的方法放到props，自动dispatch
  { addGun, removeGun, addGunAsync },
)
class App extends React.Component {
  render() {
    return (
      <div>
        <h1>现在有机关枪{this.props.num}把</h1>
        <button onClick={this.props.addGun}>申请武器</button>
        <button onClick={this.props.removeGun}>上交武器</button>
        <button onClick={this.props.addGunAsync}>拖两天再给</button>
      </div>
    )
  }
}

export default App;