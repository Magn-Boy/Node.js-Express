import * as examRepository from './exam.memory.repository.js';
export const getAllExams = () => examRepository.getAllExams();
export const getExamById = (examId) => examRepository.getExamById(examId);
export const getExamTeachers = (examId) => examRepository.getTeachersByExamId(examId);
export const createExam = (examData) => examRepository.createExam(examData);
export const updateExam = (examId, updatedExamData) => examRepository.updateExam(examId, updatedExamData);
export const deleteExam = (examId) => examRepository.deleteExam(examId);
//# sourceMappingURL=exam.service.js.map