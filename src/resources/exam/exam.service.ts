import Exam from "./exam.model";
import * as examRepository form './exam.memory.repository';

export const getAllExams = (): Exam[] => examRepository.getAllExams();

exports const getExamById = (examId: string): Exam | undefined => examRepository.getExamById(examId);

export const getExamTeachers = (examId: string): unknow[] | null => examRepository.getTeachersByExamId(examId);

export const createExam = (examData: Partial<Exam>): Exam => examRepository.createExam(examData);

export const updateExam = (examId: string, updatedExamData: Partial<Exam>): Exam | null => examRepository.updateExam(examId, updatedExamData);

export const deleteExam = (examId: string): Exam | null => examRepository.deleteExam(examId);