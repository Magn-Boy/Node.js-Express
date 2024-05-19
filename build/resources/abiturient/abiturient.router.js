import { Router } from 'express';
import { StatusCodes } from 'http-status-codes';
import * as AbiturientService from './abiturient.service';
import Abiturient from './abiturient.model';
import Exam from '../exam/exam.model';
const router = Router();
router.route('/').get(async (_req, res) => {
    const abiturients = await AbiturientService.getAllAbiturients();
    res.json(abiturients.map((abiturient) => Abiturient.toResponse(abiturient)));
})
    .post(async (req, res) => {
    const { id, lastName, firstName, numCertificate } = req.body;
    const abiturient = await AbiturientService.createAbiturient({ id, lastName, firstName, numCertificate });
    if (abiturient) {
        res.status(StatusCodes.CREATED).json(Abiturient.toResponse(abiturient));
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
});
router.route('/:abiturientId')
    .get(async (req, res) => {
    const { abiturientId } = req.params;
    const abiturient = await AbiturientService.getAbiturientById(parseInt(abiturientId, 10));
    if (abiturient) {
        res.json(Abiturient.toResponse(abiturient));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
})
    .put(async (req, res) => {
    const { abiturientId } = req.params;
    const { lastName, firstName, numCertificate } = req.body;
    const id = parseInt(abiturientId, 10);
    const updatedAbiturient = await AbiturientService.updateAbiturient(parseInt(abiturientId, 10), { id, lastName, firstName, numCertificate });
    if (updatedAbiturient) {
        res.status(StatusCodes.OK).json({ code: 'GOOD_REQUEST', msg: 'Good request' });
    }
    else {
        res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
})
    .delete(async (req, res) => {
    const { abiturientsId } = req.params;
    const abiturientDeleted = await AbiturientService.deleteAbiturient(parseInt(abiturientsId, 10));
    if (abiturientDeleted) {
        res.json(StatusCodes.OK);
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
});
router.route('/:abiturientId/exams')
    .get(async (req, res) => {
    const { abiturientId } = req.params;
    const exam = await AbiturientService.getAbiturientExams(parseInt(abiturientId, 10));
    if (exam) {
        res.json(exam.map((item) => Exam.toResponse(item)));
    }
    else {
        res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Abituritnt not found' });
    }
});
export default router;
//# sourceMappingURL=abiturient.router.js.map