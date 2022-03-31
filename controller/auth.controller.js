const User = require("../models/user.model")
const jwt = require("jsonwebtoken")

//for token we need some key,//process.env.SECRET_KEY
const generateToken = (user) => {
    return jwt.sign({user},"tarashish")
}

//register
const register = async (req, res) => {
    try {

        let user = await User.findOne({ email: req.body.email })
        if (user) {
            return res.status(400).send({ messgae: "email already exist" })
        }

        user = await User.create(req.body)

        //token generate
        const token = generateToken(user)
        return res.status(200).send({ user, token });
    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
}

//login
const login = async (req, res) => {
    try {
       
        const user = await User.findOne({ email: req.body.email })


       
        if (!user) {
            return res.status(400).send("wrong Email")
        }
        const match = user.checkPassword(req.body.password)

      
        if (!match) {
            return res.status(400).send({ message: "Wrong password" })
        }

        const token = generateToken(user)
        return res.status(200).send({user, token});

    }
    catch (err) {
        res.status(400).send({ message: err.message })
    }
}

module.exports = {register,login}