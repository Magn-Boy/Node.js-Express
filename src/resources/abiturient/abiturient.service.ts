import * as abiturientRepository from './abiturient.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Abiturient from './abiturient.model';

export const getAllAbiturients = (): Abiturient[] => {
    return abiturientRepository.getAllAbiturients();
}

export const getAbiturientById = (abiturientId: number): Abiturient | null =>{
    return abiturientRepository.getAbiturientById(abiturientId);
} 

export const getAbiturientExams = (abiturientId:  number): unknown[] => {
    return examRepository.getExamsByAbiturientId(abiturientId);
} 

export const createAbiturient = (abiturientData: Partial<Abiturient>): Abiturient => {
    return abiturientRepository.createAbiturient(abiturientData);
} 

export const updateAbiturient = (abiturientId: number, updatedAbiturientData: Abiturient): boolean => {
    return abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
} 

export const deleteAbiturient = (abiturientId: number): boolean => {
    return abiturientRepository.deleteAbiturient(abiturientId);
}
