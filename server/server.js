const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

// middlewares 
app.use(cors())
app.use(express.json())

// routes 
app.get('/',(req,res)=>{res.json({msg:"initial route"})})

// connecting to database
mongoose.connect(process.env.MONGODB_URI).then(()=>{
    //listen for the request
    app.listen(process.env.PORT,()=>{
        console.log('listening on the port '+ process.env.PORT)
    })
}).catch((error)=>{
    console.log(error)
})