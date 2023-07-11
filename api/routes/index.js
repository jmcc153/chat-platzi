const express = require('express');
const router = express.Router();
const messageRouter = require('./messages.router');
const userRouter = require('./user.router');
const chatRouter = require('./chat.router');

const routerApi = (app) => {
    app.use(express.static('public'));
    app.use('/api', router);
    router.use('/message', messageRouter);
    router.use('/user', userRouter)
    router.use('/chat', chatRouter)
}

module.exports = routerApi;