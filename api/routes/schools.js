import express from "express";
import { createSchool, deleteSchool, getSchool, getSchools, updateSchool } from "../controllers/school.js";
const router = express.Router();

// router.get("/", (req,res)=>{
//     res.send("This is a school endpoint")
// })
// router.get("/schools", (req,res)=>{
//     res.send("This is schools endpoint")
// })

// CREATE
router.post("/", createSchool)
// UPDATE
router.put("/:id", updateSchool)
// DELETE
router.delete("/:id", deleteSchool)
// GET
router.get("/:id", getSchool)
// GET ALL
router.get("/", getSchools)

export default router