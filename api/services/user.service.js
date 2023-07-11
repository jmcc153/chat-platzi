const connection = require('../database/connection');
const model = require('../model/user.model');

connection.connect();

function addUser(user) {
  return new Promise((resolve, reject) => {
    if(!user) {
      return reject('Invalid data');
    }
  const myUser = new model(user);
  myUser.save();
  resolve('User added');
  })
}
async function getUsers() {
  const users = await model.find();
  return users;
}

module.exports = {
  addUser,
  getUsers
}