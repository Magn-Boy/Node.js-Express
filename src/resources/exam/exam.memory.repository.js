const Exam = require('./exam.model');

const exams = [];

exports.getAllExams = () => {
  return exams;
};

exports.getExamById = (examId) => {
  return exams.find(exam => exam.id === examId);
};

exports.createExam = (examData) => {
  const newExam = new Exam(
    examData.id,
    examData.abiturientId,
    examData.teacherId,
    examData.subject,
    examData.date,
    examData.score
  );
  exams.push(newExam);
  return newExam;
};

exports.updateExam = (examId, updatedExamData) => {
  const index = exams.findIndex(exam => exam.id === examId);
  if (index !== -1) {
    exams[index] = { ...exams[index], ...updatedExamData };
    return exams[index];
  }
  return null;
};

exports.deleteExam = (examId) => {
  const index = exams.findIndex(exam => exam.id === examId);
  if (index !== -1) {
    return exams.splice(index, 1)[0];
  }
  return null;
};