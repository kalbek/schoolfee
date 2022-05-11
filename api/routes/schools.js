import express from "express";
import {
  countByCity,
  countByType,
  createSchool,
  deleteSchool,
  getSchool,
  getSchoolStudents,
  getSchools,
  updateSchool,
} from "../controllers/school.js";
import School from "../models/School.js";
import {verifyAdmin} from "../utils/verifyToken.js"
const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createSchool);

//UPDATE
router.put("/:id", verifyAdmin, updateSchool);
//DELETE
router.delete("/:id", verifyAdmin, deleteSchool);
//GET
router.get("/find/:id", getSchool);
//GET ALL

router.get("/", getSchools);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/student/:id", getSchoolStudents);

export default router;
