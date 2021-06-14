
const mongoose = require('mongoose');
// 连接mongo，并且使用imooc集合
const DB_URL = 'mongodb://127.0.0.1:27017/imooc-chat-2021';
mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

const models = {
  user: {
    'user': { type: String, require: true },
    'pwd': { type: String, require: true },
    'type': { type: String, require: true },
    // 头像
    'avatar': { type: String },
    // 个人简介或职位简介
    'desc': { type: String },
    // 职位名
    'title': { type: String },
    // 如果你是boss，还有两个字段
    'company': { type: String },
    'money': { type: String }
  },
  chat: {
    'chatid': { type: String, require: true },
    'from': { type: String, require: true },
    'to': { type: String, require: true },
    'read': { type: Boolean, default: false },
    'content': { type: String, require: true, default: '' },
    'create_time': { type: Number, default: Date.now() }
  }
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]));
}

module.exports = {
  getModel: function (name) {
    return mongoose.model(name);
  }
}

// mongoose.connection.on('connected', () => {
//   console.log('mongo connected success');
// })

// // 类似于mysql的表 mongo有文档和模型
// const User = mongoose.model('user', new mongoose.Schema({
//   user: { type: String, require: true },
//   age: { type: Number, require: false }
// }))

// 新增数据
// User.create({
//   user: 'xiaohua',
//   age: 12
// }, (err, doc) => {
//   if (!err) {
//     console.log(doc);
//   } else {
//     console.log(err);
//   }
// })

// 新建app
// User.remove({ age: 12 }, (err, doc) => {
//   console.log(doc);
// })
// User.update({user: 'xiaoming'}, {'$set': {age: 26}}, (err, doc) => {
//   if(!err){
//     console.log(doc);
//   }
// })