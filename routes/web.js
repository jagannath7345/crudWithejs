import express from "express"
const router = express.Router();
import StudentController from "../controller/studentController.js";

router.get('/', StudentController.getAllStudents )
router.post('/', StudentController.insertStudents )
router.get('/edit/:id', StudentController.editStudents )
router.post('/update/:id', StudentController.updateStudents )
router.post('/delete/:id', StudentController.deleteStudents )

export default router;