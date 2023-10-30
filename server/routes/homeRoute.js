const { Router } = require('express')
const { userLogin, userSignup } = require('../controllers/homeController')

const router = Router()

//login route
router.post('/login', userLogin)

//signup route
router.post('/signup', userSignup)

module.exports = router