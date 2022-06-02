const express = require('express')
const router = express.Router()
const { registerAdmin, loginAdmin, getMe, } = require('../controllers/adminController')
const { protect } = require('../middleware/authMiddleware')
// reg admin
router.post('/', registerAdmin)
// admin login
router.post('/login', loginAdmin)
// // get admin info
router.get('/me', protect, getMe)
// router.get('/me', protect, getMe)

module.exports = router