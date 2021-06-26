import React from 'react';
import { connect } from 'react-redux';
import { List, Badge } from 'antd-mobile';

@connect(
  state => state
)
class Msg extends React.Component {
  getLast(arr) {
    return arr[arr.length - 1];
  }
  render() {
    // console.log(this.props);
    const Item = List.Item;
    const Brief = Item.Brief;
    const userid = this.props.user._id;
    const userInfo = this.props.chat.users;
    const msgGroup = {};
    this.props.chat.chatmsg.forEach(v => {
      msgGroup[v.chatid] = msgGroup[v.chatid] || [];
      msgGroup[v.chatid].push(v);
    })
    const chatList = Object.values(msgGroup);
    return (
      <div>
        {chatList.map(v => {
          console.log(v);
          const lastItem = this.getLast(v);
          const unreadNum = v.filter(v => !v.read && v.to === userid).length;
          const targetId = v[0].from === userid ? v[0].to : v[0].from;
          if (!userInfo[targetId]) {
            return null;
          }
          // const name = userInfo[targetId] ? userInfo[targetId].name : '';
          // const avatar = userInfo[targetId] ? userInfo[targetId].avatar : '';
          return (
            <List
              key={lastItem._id}
            >
              <Item
                extra={<Badge text={unreadNum} />}
                thumb={require(`../img/${userInfo[targetId].avatar}.png`).default}
              >
                {lastItem.content}
                <Brief>{userInfo[targetId].name}</Brief>
              </Item>
            </List>
          )
        })}
      </div>
    )
  }
}

export default Msg;