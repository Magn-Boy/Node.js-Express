const Exam = require('./exam.model');

const exams = [];

exports.getExamById = (examId) => {
    return examRepository.getExamById(examId);
};

exports.getExamTeachers = (examId) => {
    return examRepository.getTeachersByExamId(examId);
};

exports.createExam = (examData) => {
    return examRepository.createExam(examData);
};

exports.updateExam = (examId, updatedExamData) => {
    return examRepository.updateExam(examId, updatedExamData);
};

exports.deleteExam = (examId) => {
    return examRepository.deleteExam(examId);
};