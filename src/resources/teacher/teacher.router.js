const express = require('express');
const teacherController = require('./teacher.controller.js');
const router = express.Router();

router.get('/', teacherController.getAllTeachers);
router.get('/:teacherId', teacherController.getTeacherById);
router.get('/:teacherId/exams', teacherController.getTeacherExams);
router.post('/', teacherController.createTeacher);
router.put('/:teacherId', teacherController.updateTeacher);
router.delete('/:teacherId', teacherController.deleteTeacher);

module.exports = router;
