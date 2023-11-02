const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

Schema = mongoose.Schema


adminSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

adminSchema.statics.signup = async function (email, password) {

    //validate the email and password
    if (!email || !password) {
        throw Error('Please enter all the fields')
    }
    if (!validator.isEmail(email)) {
        throw Error('Please enter a valid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Please enter a password with capital,small letters and symbols')
    }

    // check whether that email already exist 
    const exist = await this.findOne({ email: email })

    if (exist) {
        throw Error('This email already exist')
    }

    //hash password 
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    //create admin
    const admin = await this.create({ email: email, password: hash })

    return admin
}

//login function
adminSchema.statics.login = async function (email, password) {
    if (!email || !password) {
        throw Error('Please enter all the fields')
    }

    const admin = await this.findOne({ email: email })

    if (!admin) {
        throw Error('Invalid email')
    }

    const match = await bcrypt.compare(password, admin.password)

    if(!match){
        throw Error('Incorrect Password')
    }

    return admin
}

module.exports = mongoose.model('Admin',adminSchema)