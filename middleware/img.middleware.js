const config = require('config');
const Image = require('../models/Image');

module.exports = (req, res, next) => {
    if (req.method === 'OPTIONS') {
        return next();
    }

    try {

        console.log('Body:', req.body);

        const { directory, password } = req.url;
        //registration logic
        const stranger = await Image.findOne({ email });
        if(stranger) {
            return res.status(400).json({message: "Such user already exists"});
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });

        await user.save();

        res.status(201).json({ message:"User has been created" });


        next();

    } catch (e) {
        res.status(500).json({ message: "Something Went Wrong..." });
    }
}