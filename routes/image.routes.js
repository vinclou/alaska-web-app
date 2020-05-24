const {Router} = require('express');
const Image = require('../models/Image');
const router = Router();
const path = require('path');
const auth = require('../middleware/auth.middleware');
const config = require('config');

const imageContent = require('../docs/img_test.json');

let imagePath = "./cameraTrap/anwr/31/2019/100RECNX/";
let fileName = imageContent[0].name;
console.log(fileName);



router.post('/generate', async (req, res) => {
    try {
        const baseURL = config.get('baseURL');
        const { from } = req.body;


    } catch (e) {
        res.status(500).json({ message: "Something Went Wrong..." });
    }
});

//return all images connected to the user
router.get('/', auth, async (req, res) => {
    try {
        const images = await Image.find({ owner: req.user.userId }); //Don't add forget code here
        res.json(images);
    } catch (e) {
        res.status(500).json({ message: "Something Went Wrong..." });
    }
});

//return one image
router.get('/:id', async (req, res) => {
    try {
        const image = await Image.findById( req.params.id );
        res.json(image);
    } catch (e) {
        res.status(500).json({ message: "Something Went Wrong..." });
    }
});


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