import Exam from './exam.model';
import * as examRepository from './exam.memory.repository';

export const getAllExams = (): Exam[] => examRepository.getAllExams();

export const getExamById = (examId: number): Exam | undefined => examRepository.getExamById(examId);

export const getExamTeachers = (examId: number): unknown[] | null => examRepository.getTeachersByExamId(examId);

export const createExam = (examData: Partial<Exam>): Exam => examRepository.createExam(examData);

export const updateExam = (examId: number, updatedExamData: Exam): boolean => examRepository.updateExam(examId, updatedExamData);

export const deleteExam = (examId: number): boolean => examRepository.deleteExam(examId);