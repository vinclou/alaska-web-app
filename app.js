const express  = require('express');
const config   = require('config');
const mongoose = require('mongoose');
const walk = require('walk');
const fs = require('fs');
const path = require('path');
const utils = require('./utils.js');
const imageContent = require('./docs/img_test.json');

const app = express();

app.use(express.json({ extended: true }));

app.use('/api/auth', require('./routes/auth.routes'));

app.use('/api/images', require('./routes/image.routes'));

//const imgFolderPath = path.join(__dirname, 'cameraTrap');
//const audFolderPath = path.join(__dirname, 'real');
/*
let options = {
    dotfiles: "ignore", //allow, deny, ignore
    etag: true,
    extensions: ["flac", "jpg"],//adds these extensions if extension is not provided
    index: false, //to disable directory indexing
    maxAge: "7d",
    redirect: false,
    setHeaders: function(res, path, stat) {
      //add this header to all static responses
      res.set("x-timestamp", Date.now());
    }
};

  app.use(express.static(imgFolderPath, options));
  app.use(express.static(audFolderPath, options));
*/
/* Gettin Images and Audio
app.get("/", (req, res) => {
    let img = `<img src="/anwr/31/2019/100RECNX/20190601_000000.jpg"/>`;

    let html = `<!Doctype html><html><head><title>Sample</title></head>`;
    html += `<body><h1>Sample HTML</h1><main>${img}</main></body></html>`;
    res.send(html);
});
*/
/*
app.get("/", (req, res) => {
    let a = `<audio src="/anwr/31/2019/100RECNX/SINP-10_20190601_064602_010000_000100.flac"/>`;

    let html = `<!Doctype html><html><head><title>Sample</title></head>`;
    html += `<body><h1>Sample HTML</h1><main>${a}</main></body></html>`;
    res.send(html);
});
*/

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

let hasRun = true;
try {
    if(!hasRun) {
        hasRun = utils.makeJson();
    } else { console.log("Json Present"); }
} catch (e) {
    console.log('Json File Creation Error: ', e.message);
}

////////////////////////////////////////////////////////////////////////////////////////