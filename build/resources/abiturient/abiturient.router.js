import express from 'express';
import { getAllAbiturients, getAbiturientExams, getAbiturientById, createAbiturient, updateAbiturient, deleteAbiturient } from './abiturient.controller';
const router = express.Router();
router.get('/', getAllAbiturients);
router.get('/:abiturientId', getAbiturientById);
router.get('/:abiturientId/exams', getAbiturientExams);
router.post('/', createAbiturient);
router.put('/:abiturientId', updateAbiturient);
router.delete('/:abiturientId', deleteAbiturient);
export default router;
//# sourceMappingURL=abiturient.router.js.map