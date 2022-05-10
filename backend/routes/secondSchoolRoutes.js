const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { 
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,
    getSchoolStudents,

} = require('../controllers/secondSchoolController')

router.route('/').get(protect, getSchools).post(protect, setSchools)
router.route('/:id').put(protect, updateSchools).delete(protect, deleteSchools)


router.route('/schools/students/').get(protect, getSchoolStudents)
module.exports = router