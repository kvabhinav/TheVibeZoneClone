const Admin = require('../models/adminModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {
    return jwt.sign({ _id: _id }, process.env.SECRET, { expiresIn: '1d' })
}

const adminSignup = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.signup(email, password)

        const token = await createToken(admin._id)

        res.status(200).json({ email: email, token: token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

const adminLogin = async (req, res) => {
    const { email, password } = req.body

    try {
        const admin = await Admin.login(email, password)

        const token = await createToken(admin._id)

        res.status(200).json({ email: email, token: token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

module.exports = { adminLogin, adminSignup }