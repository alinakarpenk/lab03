const User = require("../models/user")

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body)
        await user.save()
        res.json(user)
    } catch (error) {
        res.send(error.message)
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.send(error.message)
    }
}
