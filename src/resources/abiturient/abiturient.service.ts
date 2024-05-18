import * as abiturientRepository from './abiturient.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Abiturient from './abiturient.model';

export const getAllAbiturients = (): Abiturient[] => abiturientRepository.getAllAbiturients()

export const getAbiturientById = (abiturientId: number): Abiturient | null =>abiturientRepository.getAbiturientById(abiturientId) 

export const getAbiturientExams = (abiturientId:  number): unknown[] => examRepository.getExamsByAbiturientId(abiturientId) 

export const createAbiturient = (abiturientData: Partial<Abiturient>): Abiturient => abiturientRepository.createAbiturient(abiturientData) 

export const updateAbiturient = (abiturientId: number, updatedAbiturientData: Abiturient): boolean => abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData) 

export const deleteAbiturient = (abiturientId: number): boolean => abiturientRepository.deleteAbiturient(abiturientId)
