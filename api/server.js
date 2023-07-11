
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').Server(app);
const socket = require('./socket');


const routerApi = require('./routes');
const port = 3100;

app.use(cors());
app.use(express.json());



socket.connect(server);
routerApi(app);


/* app.use('/app', express.static('public')); */

server.listen(port, () => {
    console.log(`Server is running ${port}`);
})

