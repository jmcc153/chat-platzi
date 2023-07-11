const express = require('express');
const router = express.Router();
const { addChat, getChats } = require('../services/chat.service');


router.get('/', async (req,res) => {
  await getChats().then(users => {
    res.json(users);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

router.post('/', (req,res) => {
  const body = req.body;
  addChat(body).then(user => {
    res.status(201).send(user);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

module.exports = router;