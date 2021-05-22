
// const mongoose = require('mongoose');
// // 连接mongo，并且使用imooc2021
// const DB_URL = 'mongodb://127.0.0.1:27017/imooc2021';
// mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });


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