import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as examService from './exam.service';
import Exam from './exam.model';
import Teacher from '../teacher/teacher.model';
const router = Router();
router.route('/').get(async (_req, res) => {
    const exams = await examService.getAllExams();
    res.json(exams.map((exam) => Exam.toResponse(exam)));
})
    .post(async (req, res) => {
    const { id, abiturientId, teacherId, subject, date, score } = req.body;
    const exam = await examService.createExam({ id, abiturientId, teacherId, subject, date, score });
    if (exam) {
        res.status(StatusCodes.CREATED).json(Exam.toResponse(exam));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:examId')
    .get(async (req, res) => {
    const { examId } = req.params;
    const exam = await examService.getExamById(parseInt(examId, 10));
    if (exam) {
        res.json(Exam.toResponse(exam));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
})
    .put(async (req, res) => {
    const { examId } = req.params;
    const { abiturientId, teacherId, subject, date, score } = req.body;
    const id = parseInt(examId, 10);
    const updatedExam = await examService.updateExam(parseInt(examId, 10), { id, abiturientId, teacherId, subject, date, score });
    if (updatedExam) {
        res.status(StatusCodes.OK).json({ code: 'GOOD_REQUEST', msg: 'Good request' });
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const { examId } = req.params;
    const abiturientExam = await examService.deleteExam(parseInt(examId, 10));
    if (abiturientExam) {
        res.json(StatusCodes.OK);
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
});
router.route('/:examId/teachers')
    .get(async (req, res) => {
    const { examId } = req.params;
    const teacher = await examService.getExamTeachers(parseInt(examId, 10));
    if (teacher) {
        res.json(teacher.map((teacher) => Teacher.toResponse(teacher)));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Abiturient not found' });
    }
});
export default router;
//# sourceMappingURL=exam.router.js.map