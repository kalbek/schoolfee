const express = require('express')
const router = express.Router()
const { protect } = require('../middleware/authMiddleware')

const { 
    createStudents,
    updateStudent,
    deleteStudent,
    getStudents,
    getStudent,
} = require('../controllers/student2Controller')

// CREATE STUDENT
router.route('/:schoolId').post(protect, createStudents)
//UPDATE STUDENT INFO   
router.route('/:id').put(protect, updateStudent)
//DELETE STUDENT
router.route('/:id/:schoolId').delete(protect, deleteStudent)
//GET STUDENT
router.route('/:id').get(protect, getStudent)
//GET ALL STUDENTS
router.route('/').get(protect, getStudents)

module.exports = router