const asyncHandler = require('express-async-handler')
const Student = require('../models/studentModel')
const School = require('../models/schoolModel')
const User = require('../models/userModel')


// @desc Get schools
// @route GET /api/schools
// @ access Private
const getStudents = asyncHandler(async (req, res) => {
    // find school only by logged in user
    const students = await Student.find({user: req.user.id})
    res.status(200).json(students)     
})

// create student
const createStudents = asyncHandler(async(req, res, next) => {
    // added from booking app
    const schoolId = req.params.schoolId;
    const newStudent = new Student(req.body);
    try {
        const savedStudent = await newStudent.save();
        try {
          await School.findByIdAndUpdate(schoolId, {
            $push: { students: savedStudent._id },
          });
        } catch (err) {
          next(err);
        }
        res.status(200).json(savedStudent);
      } catch (err) {
        next(err);
      }



      
    // END OF added from booking app
})
const updateStudent = async (req, res, next) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedStudent);
  } catch (err) {
    next(err);
  }
};
 
 const deleteStudent = async (req, res, next) => {
  const studentId = req.params.hotelid;
  try {
    await Student.findByIdAndDelete(req.params.id);
    try {
      await Hotel.findByIdAndUpdate(studentId, {
        $pull: { rooms: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Student has been deleted.");
  } catch (err) {
    next(err);
  }
};
 const getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
 
module.exports = {
    createStudents,
    updateStudent,
    deleteStudent,
    getStudent,
    getStudents,
}