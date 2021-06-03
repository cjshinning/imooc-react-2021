import React from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/logo';
import { List, InputItem, Button, Radio, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../../redux/user.redux';
import imoocForm from '../../component/imooc-form/imooc-form';

@connect(
  state => state.user,
  { register }
)
@imoocForm
class Register extends React.Component {
  constructor(props) {
    super(props);
    this.handlerRegister = this.handlerRegister.bind(this);
  }
  componentDidMount() {
    this.props.handlerChange('type', 'genius');
  }

  handlerRegister() {
    this.props.register(this.props.state);
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {this.props.redirectTo ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h2>注册页</h2>
        <WingBlank>
          <List>
            {this.props.msg ? <p className='error-msg'>{this.props.msg}</p> : null}
            <InputItem
              onChange={(v) => { this.props.handlerChange('user', v) }}
            >用户</InputItem>
            <InputItem
              type="password"
              onChange={(v) => { this.props.handlerChange('pwd', v) }}
            >密码</InputItem>
            <InputItem
              type="password"
              onChange={(v) => { this.props.handlerChange('repeatpwd', v) }}
            >确认密码</InputItem>
            <RadioItem
              checked={this.props.state.type === 'genius'}
              onChange={() => { this.props.handlerChange('type', 'genius') }}
            >牛人</RadioItem>
            <RadioItem
              checked={this.props.state.type === 'boss'}
              onChange={() => { this.props.handlerChange('type', 'boss') }}
            >Boss</RadioItem>
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.handlerRegister}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Register;