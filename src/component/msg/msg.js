import React from 'react';
import { connect } from 'react-redux';

@connect(
  state => state
)
class Msg extends React.Component {
  render() {
    // console.log(this.props);
    const msgGroup = {};
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v);
    })
    console.log(msgGroup);
    return <div>消息列表页</div>
  }
}

export default Msg;