
const express = require('express');
const multer = require('multer');
const { addMessage, getMessages, updateMessage, deleteMessage } = require('../services/messages.service');
const router = express.Router();

const upload = multer({
  dest: 'public/files/'
});

router.get('/', async (req,res) => {
  const filterUser = req.query.name || null;
  await getMessages(filterUser).then(messages => {
    res.json(messages);
  }).catch(e => {
    res.status(500).send('Error');
  })
})
router.post('/', upload.single('file'),
  (req,res) => {
    const body = req.body;
    const file = req.file;
    console.log(file)
    addMessage(body, file);
    res.status(201).json({
      ...body,
      file: file.filename
    });
  })

router.patch('/:id', (req,res) => {
  const id = req.params.id;
  const body = req.body;
  updateMessage(id, body.message).then(message => {
    res.status(200).json(message);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

router.delete('/:id', (req,res) => {
  deleteMessage(req.params.id).then(() => {
  res.status(200).send(`Message ${req.params.id} deleted`);
  }).catch(e => {
    res.status(500).send('Error');
  })
})

module.exports = router;