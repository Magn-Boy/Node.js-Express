import express from 'express';
import * as examController from './exam.controller.js';
const router = express.Router();
router.get('/', examController.getAllExams);
router.get('/:examId', examController.getExamById);
router.get('/:examId/teachers', examController.getExamTeachers);
router.post('/', examController.createExam);
router.put('/:examId', examController.updateExam);
router.delete('/:examId', examController.deleteExam);
export default router;
//# sourceMappingURL=exam.router.js.map