const express = require('express');
const Router = express.Router();

Router.get('/info', function (req, res) {
  // 用户又没有cookie，返回不同的信息
  return res.json({ code: 0 })
})

module.exports = Router;