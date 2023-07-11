const express = require('express');
const { addUser, getUsers } = require('../services/user.service');
const router = express.Router();


router.get('/', async (req,res) => {
  await getUsers().then(users => {
    res.json(users);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

router.post('/', (req,res) => {
  const body = req.body;
  addUser(body).then(user => {
    res.status(201).send(user);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

module.exports = router;