import * as abiturientRepository from './abiturient.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Abiturient from './abiturient.model';

export const getAllAbiturients = (): Abiturient[] => {
    return abiturientRepository.getAllAbiturients();
}

export const getAbiturientById = (abiturientId: string): Abiturient | undefined =>{
    return abiturientRepository.getAbiturientById(abiturientId);
} 

export const getAbiturientExams = (abiturientId: string): unknown[] => {
    return examRepository.getExamsByAbiturientId(abiturientId);
} 

export const createAbiturient = (abiturientData: Partial<Abiturient>): Abiturient => {
    return abiturientRepository.createAbiturient(abiturientData);
} 

export const updateAbiturient = (abiturientId: string, updatedAbiturientData: Partial<Abiturient>): Abiturient | null => {
    return abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
} 

export const deleteAbiturient = (abiturientId: string): Abiturient | null => {
    return abiturientRepository.deleteAbiturient(abiturientId);
}
