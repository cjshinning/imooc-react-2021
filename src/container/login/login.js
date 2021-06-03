import React from 'react';
import { Redirect } from 'react-router-dom';
import Logo from '../../component/logo/logo';
import { List, InputItem, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { login } from '../../redux/user.redux';
import imoocForm from '../../component/imooc-form/imooc-form';

// function hello() {
//   console.log('Hello imooc, I love react!');
// }

// function wrapperHello(fn) {
//   return function () {
//     console.log('before say hello...');
//     fn();
//     console.log('after say hello...');
//   }
// }

// // hello();
// hello = wrapperHello(hello);
// hello();

// 属性代理 反向继承
// function WrapperHello(Comp) {
//   class WrapComp extends Comp{
//     componentDidMount() {
//       console.log('高阶组件生命周期，加载完成');
//     }
//     render() {
//       return <Comp></Comp>
//     }
//   }
//   // class WrapComp extends React.Component {
//   //   render() {
//   //     return (
//   //       <div>
//   //         <p>这是高阶组件HOC特有的元素</p>
//   //         <Comp name='test' {...this.props}></Comp>
//   //       </div>
//   //     )
//   //   }
//   // }
//   return WrapComp;
// }

// @WrapperHello
// class Hello extends React.Component {
//   render() {
//     return <h2>Hello imooc, I love react and redux.</h2>
//   }
// }

@connect(
  state => state.user,
  { login }
)
@imoocForm
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.register = this.register.bind(this);
    this.handlerLogin = this.handlerLogin.bind(this);
  }
  register() {
    this.props.history.push('/register');
  }
  handlerLogin() {
    this.props.login(this.props.state);
  }
  render() {
    return (
      <div>
        {/* <Hello></Hello> */}
        {this.props.redirectTo && this.props.redirectTo !== '/login' ? <Redirect to={this.props.redirectTo} /> : null}
        <Logo></Logo>
        <h2>登录页</h2>
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
          </List>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.handlerLogin}>登录</Button>
          <WhiteSpace></WhiteSpace>
          <Button type="primary" onClick={this.register}>注册</Button>
        </WingBlank>
      </div>
    )
  }
}

export default Login;