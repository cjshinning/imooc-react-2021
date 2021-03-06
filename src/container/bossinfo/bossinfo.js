import React from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { update } from '../../redux/user.redux';

@connect(
  state => state.user,
  { update }
)
class BossInfo extends React.Component {
  constructor() {
    super();
    this.state = {
      title: '',
      desc: '',
      company: '',
      money: ''
    }
  }
  handlerChange(key, val) {
    this.setState({
      [key]: val
    })
  }
  render() {
    const path = this.props.location.pathname;
    const redirect = this.props.redirectTo;
    return (
      <div>
        {redirect && redirect !== path ? <Redirect to={redirect} /> : null}
        <NavBar
          mode="dark"
        >Boss信息完善页</NavBar>
        <AvatarSelector
          selectAvatar={(imgname) => {
            this.setState({
              avatar: imgname
            })
          }}
        ></AvatarSelector>
        <InputItem
          onChange={v => { this.handlerChange('title', v) }}
        >
          招聘职位
        </InputItem>
        <InputItem
          onChange={v => { this.handlerChange('company', v) }}
        >
          公司名称
        </InputItem>
        <InputItem
          onChange={v => { this.handlerChange('money', v) }}
        >
          职位薪资
        </InputItem>
        <TextareaItem
          title="职位要求"
          rows={3}
          autoHeight
          onChange={v => { this.handlerChange('desc', v) }}
        />
        <Button
          onClick={() => {
            this.props.update(this.state);
          }}
          type='primary'>保存</Button>
      </div>
    )
  }
}

export default BossInfo;