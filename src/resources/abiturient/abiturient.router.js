import express from 'express';
import * as abiturientController from'./abiturient.controller.js';

const router = express.Router();

router.get('/', abiturientController.getAllAbiturients);
router.get('/:abiturientId', abiturientController.getAbiturientById);
router.get('/:abiturientId/exams', abiturientController.getAbiturientExams);
router.post('/', abiturientController.createAbiturient);
router.put('/:abiturientId', abiturientController.updateAbiturient);
router.delete('/:abiturientId', abiturientController.deleteAbiturient);

export default router;
