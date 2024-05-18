"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateExamsTeacherIdToNull = exports.updateExamsAbiturientIdToNull = exports.deleteExam = exports.updateExam = exports.createExam = exports.getTeachersByExamId = exports.getExamsByTeacherId = exports.getExamsByAbiturientId = exports.getExamById = exports.getAllExams = void 0;
const exam_model_1 = __importDefault(require("./exam.model"));
const teacher_memory_repository_1 = require("../teacher/teacher.memory.repository");
const exams = [];
const getAllExams = () => exams;
exports.getAllExams = getAllExams;
const getExamById = (examId) => exams.find(exam => exam.id === examId);
exports.getExamById = getExamById;
const getExamsByAbiturientId = (abiturientId) => exams.filter(exam => exam.abiturientId === abiturientId);
exports.getExamsByAbiturientId = getExamsByAbiturientId;
const getExamsByTeacherId = (teacherId) => exams.filter(exam => exam.teacherId === teacherId);
exports.getExamsByTeacherId = getExamsByTeacherId;
const getTeachersByExamId = (examId) => {
    const exam = exams.find(exam => exam.id === examId);
    if (!exam) {
        return null;
    }
    return teacher_memory_repository_1.teachers.filter(teacher => teacher.id === exam.teacherId);
};
exports.getTeachersByExamId = getTeachersByExamId;
const createExam = (examData) => {
    const newExam = new exam_model_1.default(examData.id || '', examData.abiturientId || '', examData.teacherId || '', examData.subject || '', examData.date || '', examData.score || 0);
    exams.push(newExam);
    return newExam;
};
exports.createExam = createExam;
const updateExam = (examId, updatedExamData) => {
    const index = exams.findIndex(exam => exam.id === examId);
    if (index !== -1) {
        exams[index] = updatedExamData;
        return true;
    }
    return false;
};
exports.updateExam = updateExam;
const deleteExam = (examId) => {
    const index = exams.findIndex(exam => exam.id === examId);
    if (index !== -1) {
        exams.splice(index, 1)[0];
        return true;
    }
    return false;
};
exports.deleteExam = deleteExam;
const updateExamsAbiturientIdToNull = (abiturientId) => {
    exams.forEach(exam => {
        if (exam.abiturientId === abiturientId) {
            exam.abiturientId = null;
            if (!exam.teacherId) {
                (0, exports.deleteExam)(exam.id);
            }
        }
    });
};
exports.updateExamsAbiturientIdToNull = updateExamsAbiturientIdToNull;
const updateExamsTeacherIdToNull = (teacherId) => {
    exams.forEach(exam => {
        if (exam.teacherId === teacherId) {
            exam.teacherId = null;
            if (!exam.abiturientId) {
                (0, exports.deleteExam)(exam.id);
            }
        }
    });
};
exports.updateExamsTeacherIdToNull = updateExamsTeacherIdToNull;
//# sourceMappingURL=exam.memory.repository.js.map