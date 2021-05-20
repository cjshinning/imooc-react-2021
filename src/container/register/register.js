import React from 'react';
import Logo from '../../component/logo/logo';
import { List, InputItem, Button, Radio, WhiteSpace, WingBlank } from 'antd-mobile';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'genius'
    }
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        <Logo></Logo>
        <h2>注册页</h2>
        <WingBlank>
          <List>
            <InputItem>用户</InputItem>
            <InputItem>密码</InputItem>
            <InputItem>确认密码</InputItem>
            <RadioItem checked={this.state.type === 'genius'}>牛人</RadioItem>
            <RadioItem checked={this.state.type === 'boss'}>Boss</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary">注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register;