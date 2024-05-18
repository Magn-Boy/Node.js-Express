const express = require('express');
const examController = require('./exam.controller.js');

const router = express.Router();

router.get('/', examController.getAllExams);
router.get('/:examId', examController.getExamById);
router.get('/:examId/teachers', examController.getExamTeachers);
router.post('/', examController.createExam);
router.put('/:examId', examController.updateExam);
router.delete('/:examId', examController.deleteExam);

module.exports = router;
