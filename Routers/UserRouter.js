const express = require('express')
const UserController = require('../Controllers/UserController')
const router = express()

router.post('/register', UserController.Register)
router.post('/login', UserController.Login)
router.post('/refresh', UserController.Refresh)
router.get('/logout', UserController.Logout)


module.exports = router
