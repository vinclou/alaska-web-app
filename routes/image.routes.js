const {Router} = require('express');
const Image = require('../models/Image');
const router = Router();
const path = require('path');

const imageContent = require('../docs/img_test.json');

let imagePath = "./cameraTrap/anwr/31/2019/100RECNX/";
let fileName = imageContent[0].name;
console.log(fileName);
/*
router.post('/images', (req, res, next) => {

    var options = {
        root: path.join(__dirname, imagePath),
        dotfiles: 'deny',
        headers: {
          'x-timestamp': Date.now(),
          'x-sent': true
        }
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
          next(err)
        } else {
          console.log('Sent:', fileName)
        }
    })

});
*/

module.exports = router;