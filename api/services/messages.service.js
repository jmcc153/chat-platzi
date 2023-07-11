const connection = require('../database/connection');
const model = require('../model/message.model');
const socket = require('../socket').socket;

connection.connect();

function addMessage(message, file) {
  const myMessage = new model(message);
  myMessage.file = 'http://localhost:3100/files/' + file.filename;

  socket.io.emit('message', myMessage);
  myMessage.save();
}

async function updateMessage(id, message) {
    const foundMessage = await model.findOne({
      _id: id
    });
    foundMessage.message = message;
    const newMessage = await foundMessage.save();
    return newMessage;
}

function getMessages(filterUser) {
  return new Promise((resolve, reject) => {
  let filter = {};
  if (filterUser !== null) {
    filter = { name: filterUser };
  }

  model.find(filter).populate('name').then((populated) => {
    resolve(populated);
  }).catch(e => {
    reject(e);
  })
  })
}

async function deleteMessage(id) {
  return await model.deleteOne({
    _id: id
  });
}

module.exports = {
  addMessage,
  getMessages,
  updateMessage,
  deleteMessage
}