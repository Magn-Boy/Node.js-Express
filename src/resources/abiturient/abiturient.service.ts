import * as abiturientRepository from './abiturient.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Abiturient from './abiturient.model';

export const getAllAbiturients = () => abiturientRepository.getAllAbiturients()

export const getAbiturientById = (abiturientId: number) => abiturientRepository.getAbiturientById(abiturientId) 

export const getAbiturientExams = (abiturientId:  number) => examRepository.getExamsByAbiturientId(abiturientId) 

export const createAbiturient = (payload: Abiturient) => {
    const abiturient = new Abiturient(payload);
    const abiturientCreated = abiturientRepository.createAbiturient(abiturient);
    return abiturientCreated;
}  

export const updateAbiturient = (abiturientId: number, updatedAbiturientData: Abiturient) => {
    const existingAbiturient = abiturientRepository.getAbiturientById(abiturientId);
    if (!existingAbiturient) {
        return false;
    }
    abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
    return true;
}  

export const deleteAbiturient = (abiturientId: number) => abiturientRepository.deleteAbiturient(abiturientId)
