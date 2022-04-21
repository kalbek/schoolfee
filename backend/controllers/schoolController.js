const express = require('express')
const router = express.Router()
const asyncHandler = require('express-async-handler')

// @desc Get schools
// @route GET /api/schools
// @ access Private
const getSchools = asyncHandler((req, res) => {
    res.status(200).json({message: ' Get Schools'})     
})

// @desc Set schools
// @route SET /api/schools
// @ access Private
const setSchools = asyncHandler((req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }
    res.status(200).json({ message: 'Set schools' })
})

// @desc Update schools
// @route PUT /api/schools
// @ access Private
const updateSchools = asyncHandler((req, res) => {
    res.status(200).json({ message: `Update schools ${req.params.id}` })
})

// @desc Delete schools
// @route DELETE /api/schools
// @ access Private
const deleteSchools = asyncHandler((req, res) => {
    res.status(200).json({ message: `Delete schools ${req.params.id}` })
})
module.exports = {
    getSchools,
    setSchools,
    updateSchools,
    deleteSchools,
}