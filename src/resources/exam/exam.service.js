const examRepository = require('./exam.memory.repository.js');

exports.getAllExams = () => examRepository.getAllExams();

exports.getExamById = (examId) => examRepository.getExamById(examId);

exports.getExamTeachers = (examId) => examRepository.getTeachersByExamId(examId);

exports.createExam = (examData) => examRepository.createExam(examData);

exports.updateExam = (examId, updatedExamData) => examRepository.updateExam(examId, updatedExamData);

exports.deleteExam = (examId) => examRepository.deleteExam(examId);