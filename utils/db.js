const mongoose = require('mongoose');
const config = require('../config');

const connect = (url = config.config.dbUrl, opts = {}) => {
  return mongoose.connect(url, { ...opts, useNewUrlParser: true });
  console.log("DB CONNECTED")
};

module.exports = {
  connect
}