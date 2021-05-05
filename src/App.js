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
    console.log('组件初始化');
  }
  componentWillMount() {
    console.log('组件马上就要加载了');
  }
  componentDidMount() {
    console.log('组件加载完毕');
  }
  componentWillReceiveProps(nextProps) {
    console.log('组件要接收父组件的值了');
  }
  shouldComponentUpdate() {
    console.log('判断是否要更新组件');
    return true;
  }
  componentWillUpdate() {
    console.log('马上就要更新组件了');
  }
  componentDidUpdate() {
    console.log('组件更新完毕');
  }
  componentWillUnmount() {
    console.log('组件卸载了');
  }
  addSoldier() {
    console.log('hello add soldier');
    this.setState({
      soldiers: [...this.state.soldiers, '新兵蛋子' + Math.random()]
    })
  }
  render() {
    console.log('组件正在要加载');
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