const express  = require('express');
const config   = require('config');
const mongoose = require('mongoose');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

//image routes
//app.use('/images', express.static(path.join(__dirname, 'public')))

//sound routes
//app.use('/sounds', express.static(path.join(__dirname, 'public')))
////////////////////////////////////////////////////////////////////////////////////////
const PORT = config.get('port') || 5000;

async function start() {
    //try catch if connection with MongoDB database was established
    try {
        await mongoose.connect(config.get('mongoUri'), {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });

        app.listen( PORT, () => console.log(`App has been started at port ${PORT}`) );
    //if you catch an error check your connection with Mongo, and see why it failed
    } catch (e) {
        console.log('Server Error', e.message);
        process.exit(1);
    }
}

start();
////////////////////////////////////////////////////////////////////////////////////////