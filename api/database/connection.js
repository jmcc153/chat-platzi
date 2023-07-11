const db = require('mongoose');

const uri = 'mongodb+srv://db_user:12345@cluster0.t4cho.mongodb.net/?retryWrites=true&w=majority'
db.Promise = global.Promise;

const connect = async () => {
    await db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
        console.log('[db] Connected successfully');
    }
    ).catch(e => console.error(e));
}

module.exports = {
    connect
}
