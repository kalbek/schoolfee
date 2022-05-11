import Student from "../models/Student.js";
import School from "../models/School.js";
import { createError } from "../utils/error.js";

export const createStudent = async (req, res, next) => {
  const schoolId = req.params.schoolid;
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
};

export const updateStudent = async (req, res, next) => {
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
export const updateStudentAvailability = async (req, res, next) => {
  try {
    await Student.updateOne(
      { "studentNumbers._id": req.params.id },
      {
        $push: {
          "studentNumbers.$.unavailableDates": req.body.dates
        },
      }
    );
    res.status(200).json("Student status has been updated.");
  } catch (err) {
    next(err);
  }
};
export const deleteStudent = async (req, res, next) => {
  const schoolId = req.params.schoolid;
  try {
    await Student.findByIdAndDelete(req.params.id);
    try {
      await School.findByIdAndUpdate(schoolId, {
        $pull: { students: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Student has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getStudent = async (req, res, next) => {
  try {
    const student = await Student.findById(req.params.id);
    res.status(200).json(student);
  } catch (err) {
    next(err);
  }
};
export const getStudents = async (req, res, next) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    next(err);
  }
};
