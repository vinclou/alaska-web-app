const {Router} = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator'); 
const jwt = require('jsonwebtoken');
const config   = require('config');

// /api/auth/register 
router.post(
    '/register',
    [
        check('email', "Incorrect Email").isEmail(),
        check('password', "Password Length Has To Be Greater Than 6").isLength({min: 6})
    ],
    async( req, res ) => {
    try {
        //console.log('Body:', req.body);
        const errors = validationResult(req);
        //check if there are any errors in the
        if( !errors.isEmpty() ) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during authorization'
            });
        }

        const { email, password } = req.body;
        //registration logic
        const stranger = await User.findOne({ email });
        if(stranger) {
            return res.status(400).json({message: "Such user already exists"});
        }
        
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message:"User has been created" });

    } catch (e) {
        res.status(500).json( {message: "Something went wrong..."} );
    }
});

// /api/auth/login
router.post(
    '/login',   
    [
        check('email', "Enter Correct Email").normalizeEmail().isEmail(),
        check('password', "Enter password").exists()
    ],
    async( req, res ) => {
    try {
        const errors = validationResult(req);
        //check if there are any errors in the
        if( !errors.isEmpty() ) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data during authorization'
            });
        }

        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if( !user ) { 
            return res.status(400).json({ message: "User wasn't found "}); 
        }

        const isPass = await bcrypt.compare(password, user.password)

        if( !isPass ) {
            return res.status(400).json({ message: "Incorrect Password "});
        }

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),//nobody supposed to know jwtSecret in config 
            { expiresIn: '1h' }     //work on it later  
        );
        res.json({ token, userId: user.id });

    } catch (e) {
        console.log(e.message);
        res.status(500).json( {message: "Something went wrong..."} );
    }
});


module.exports = router;