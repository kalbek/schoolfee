const express = require('express')
const router = express.Router()
const { 
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,

} = require('../controllers/schoolController')

router.route('/').get(getSchools).post(setSchools)
router.route('/:id').put(updateSchools).delete(deleteSchools)

module.exports = router