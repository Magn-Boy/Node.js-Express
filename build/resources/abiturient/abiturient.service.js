import * as abiturientRepository from './abiturient.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';
export const getAllAbiturients = () => abiturientRepository.getAllAbiturients();
export const getAbiturientById = (abiturientId) => abiturientRepository.getAbiturientById(abiturientId);
export const getAbiturientExams = (abiturientId) => examRepository.getExamsByAbiturientId(abiturientId);
export const createAbiturient = (abiturientData) => abiturientRepository.createAbiturient(abiturientData);
export const updateAbiturient = (abiturientId, updatedAbiturientData) => abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
export const deleteAbiturient = (abiturientId) => abiturientRepository.deleteAbiturient(abiturientId);
//# sourceMappingURL=abiturient.service.js.map