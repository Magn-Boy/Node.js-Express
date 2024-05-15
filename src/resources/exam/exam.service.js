const examRepository = require('./exam.memory.repository.js');

exports.getAllExams = () => {
    return examRepository.getAllExams();
  };

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