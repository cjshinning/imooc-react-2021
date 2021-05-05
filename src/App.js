import React from 'react';

class App extends React.Component {
  render() {
    const boss = '李云龙';
    return (
      <div>
        <h2>独立团, 团长{boss}</h2>
        <Yiying laoda="张大喵"></Yiying>
        <Qibinglian laoda="孙德胜"></Qibinglian>
      </div>
    )
  }
}

function Qibinglian(props) {
  return <h2>骑兵连{props.laoda}，冲啊！</h2>
}

class Yiying extends React.Component {
  constructor(props) {
    super();
    this.state = {
      soldiers: ['虎子', '柱子', '王根生']
    }
    // this.addSoldier = this.addSoldier.bind(this);
  }
  addSoldier() {
    console.log('hello add soldier');
    this.setState({
      soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
    })
  }
  render() {
    return (
      <div>
        <h2>一营营长，{this.props.laoda}</h2>
        <button onClick={() => this.addSoldier()}>新兵入伍</button>
        <ul>
          {this.state.soldiers.map(v => {
            return <li key={v}>{v}</li>
          })}
        </ul>
      </div>
    )
  }
}

export default App;