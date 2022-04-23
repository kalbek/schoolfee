const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')
const School = require('../models/schoolModel')

// @desc Get schools
// @route GET /api/schools
// @ access Private
const getSchools = asyncHandler(async (req, res) => {
    const schools = await School.find()
    res.status(200).json(schools)     
})

// @desc Set schools
// @route SET /api/schools
// @ access Private
const setSchools = asyncHandler(async(req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    const school = await School.create({
        text: req.body.text,
    })
    res.status(200).json(school)
})

// @desc Update schools
// @route PUT /api/schools
// @ access Private
const updateSchools = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Update schools ${req.params.id}` })
})

// @desc Delete schools
// @route DELETE /api/schools
// @ access Private
const deleteSchools = asyncHandler(async(req, res) => {
    res.status(200).json({ message: `Delete schools ${req.params.id}` })
})
module.exports = {
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,
}