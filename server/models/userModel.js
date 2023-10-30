const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const Schema = mongoose.Schema

const userSchema = new Schema({
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

//signup static function
userSchema.statics.signup = async function (email, password) {

    //validation
    if (!email || !password) {
        throw Error("Please Enter all the fields")
    }
    if (!validator.isEmail(email)) {
        throw Error("Enter a valid email")
    }
    if (!validator.isStrongPassword(password)) {
        throw Error("Enter a strong password with atleast 16 charcters including numbers alphabets and symbols")
    }


    const exist = await this.findOne({ email: email })

    if (exist) {
        throw Error("This email already exist")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    const user = await this.create({ email: email, password: hash })
    return user
}

//signin statics function

userSchema.statics.login = async function (email, password) {

    if (!email || !password) {
        throw Error("Please Enter all the fields")
    }

    const user = await this.findOne({ email })

    if(!user){
        throw Error("Invalid Email")
    }

    const match = bcrypt.compare(password,user.password)
    if(!match){
        throw Error("Incorrect Password")
    }

    return user
}

module.exports = mongoose.model('User', userSchema)