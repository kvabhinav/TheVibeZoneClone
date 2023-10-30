const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const homeRoute = require('./routes/homeRoute')
// const adminRoute = require('./routes/adminRoute')


const app = express()

//middlewares
app.use(cors())
app.use(express.json())


//routes
app.use('/', homeRoute)
// app.use("/admin",adminRoute)


mongoose.connect(process.env.MONGODB_URI).then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
        console.log("listening on the port" + process.env.PORT)
    })
}).catch((error) => {
    console.log(error)
})