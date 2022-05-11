import express from "express";
import {
  createStudent,
  deleteStudent,
  getStudent,
  getStudents,
  updateStudent,
  updateStudentAvailability,
} from "../controllers/student.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();
//CREATE
router.post("/:schoolid", verifyAdmin, createStudent);
//UPDATE
router.put("/availability/:id", updateStudentAvailability);
router.put("/:id  ", verifyAdmin,   );
//DELETE
router.delete("/:id/:schoolid", verifyAdmin, deleteStudent);
//GET
router.get("/:id", getStudent);
//GET ALL
router.get("/", getStudents);

export default router;
