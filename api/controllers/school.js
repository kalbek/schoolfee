import School from "../models/School.js";

// CREATE SCHOOL
export const createSchool = async (req, res, next) => {
    const newSchool = new School(req.body)
    try {
        const savedSchool = await newSchool.save()
        res.status(200).json(savedSchool)
    } catch (err) {
        next(err)
    }  
}

// UPDATE SCHOOL
export const updateSchool = async (req, res, next) => {
    try {
        const updatedSchool = await School.findByIdAndUpdate(req.params.id, { $set: req.body}, {new: true})
        res.status(200).json(updatedSchool)
    } catch (err) {
        next(err)
        // res.status(500).json(err)
    } 
}
// DELETE SCHOOL
export const deleteSchool = async (req, res, next) => {
    try {
        await School.findByIdAndDelete(req.params.id)
        res.status(200).json(`Successfully deleted school`)
    } catch (err) {
        // next(err)
        res.status(500).json(err)
    }  
}
// GET A SCHOOL
export const getSchool = async (req, res, next) => {
    try {
        const school = await School.findById(req.params.id)
        res.status(200).json(school)
    } catch (err) {
        next(err)
        // res.status(500).json(err)
    }      
}

// GET ALL SCHOOLS
export const getSchools = async (req, res, next) => {
    try {
        const schools = await School.find()
        res.status(200).json(schools)
    } catch (err) {
        next(err)
    }  
}
