import Exam from './exam.model';
import * as examRepository from './exam.memory.repository';

export const getAllExams = () => examRepository.getAllExams();

export const getExamById = (examId: number) => examRepository.getExamById(examId);

export const getExamTeachers = (examId: number) => examRepository.getTeachersByExamId(examId);

export const createExam = (payload: Exam) => {
    const exam = new Exam(payload);
    const examCreated = examRepository.createExam(exam);
    return examCreated;
} 

export const updateExam = (examId: number, updatedExamData: Exam) => {
    const existingExam = examRepository.getExamById(examId);
    if (!existingExam) { 
        return false;
    }
    examRepository.updateExam(examId,updatedExamData)
    return true;
} 

export const deleteExam = (examId: number) => examRepository.deleteExam(examId) 