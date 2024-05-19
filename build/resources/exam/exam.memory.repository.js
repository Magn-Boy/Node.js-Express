import Exam from './exam.model.js';
import { teachers } from '../teacher/teacher.memory.repository.js';
const exams = [];
export const getAllExams = () => exams;
export const getExamById = (examId) => exams.find(e => e.id === examId);
export const getExamsByAbiturientId = (abiturientId) => exams.filter(e => e.abiturientId === abiturientId);
export const getExamsByTeacherId = (teacherId) => exams.filter(e => e.teacherId === teacherId);
export const getTeachersByExamId = (examId) => {
    const exam = exams.find(e => e.id === examId);
    if (!exam) {
        return null;
    }
    return teachers.filter(teacher => teacher.id === exam.teacherId);
};
export const createExam = (examData) => {
    const newExam = new Exam(examData.id || 0, examData.abiturientId || 0, examData.teacherId || 0, examData.subject || '', examData.date || '', examData.score || 0);
    exams.push(newExam);
    return newExam;
};
export const updateExam = (examId, updatedExamData) => {
    const index = exams.findIndex(e => e.id === examId);
    if (index !== -1) {
        exams[index] = { ...exams[index], ...updatedExamData };
        return true;
    }
    return false;
};
export const deleteExam = (examId) => {
    const index = exams.findIndex(e => e.id === examId);
    if (index !== -1) {
        exams.splice(index, 1);
        return true;
    }
    return false;
};
export const updateExamsAbiturientIdToNull = (abiturientId) => {
    exams.forEach(exam => {
        if (exam.abiturientId === abiturientId) {
            exam = { ...exam, abiturientId: null };
            if (!exam.teacherId) {
                deleteExam(exam.id);
            }
        }
    });
};
export const updateExamsTeacherIdToNull = (teacherId) => {
    exams.forEach(exam => {
        if (exam.teacherId === teacherId) {
            exam = { ...exam, teacherId: null };
            if (!exam.abiturientId) {
                deleteExam(exam.id);
            }
        }
    });
};
//# sourceMappingURL=exam.memory.repository.js.map