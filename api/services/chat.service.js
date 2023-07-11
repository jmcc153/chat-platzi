const connection = require('../database/connection');
const model = require('../model/chat.model');

connection.connect();

function addChat(user) {
  return new Promise((resolve, reject) => {
    if(!user) {
      return reject('Invalid data');
    }
  const myChat = new model(user);
  myChat.save();
  resolve('User added');
  })
}
function getChats() {
  return new Promise((resolve, reject) => {
    model.find().populate('users').then((populated) => {
      resolve(populated);
    }).catch(e => {
      reject(e);
    })
  })
}

module.exports = {
  addChat,
  getChats
}