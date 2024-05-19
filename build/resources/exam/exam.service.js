import Exam from './exam.model';
import * as examRepository from './exam.memory.repository';
export const getAllExams = () => examRepository.getAllExams();
export const getExamById = (examId) => examRepository.getExamById(examId);
export const getExamTeachers = (examId) => examRepository.getTeachersByExamId(examId);
export const createExam = (payload) => {
    const exam = new Exam(payload);
    const examCreated = examRepository.createExam(exam);
    return examCreated;
};
export const updateExam = (examId, updatedExamData) => {
    const existingExam = examRepository.getExamById(examId);
    if (!existingExam) {
        return false;
    }
    examRepository.updateExam(examId, updatedExamData);
    return true;
};
export const deleteExam = (examId) => examRepository.deleteExam(examId);
//# sourceMappingURL=exam.service.js.map