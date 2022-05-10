const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { 
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,

} = require('../controllers/schoolController')
const {getStudents} = require('../controllers/student2Controller')

router.route('/').get(protect, getSchools).post(protect, setSchools)
router.route('/:id').put(protect, updateSchools).delete(protect, deleteSchools)


router.route('/school/:id').get(protect, getStudents)

module.exports = router