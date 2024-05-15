const Exam = require('./exam.model');
const teachers = require('../teacher/teacher.memory.repository').teachers;

const exams = [];

exports.getAllExams = () => {
  return exams;
};

exports.getExamById = (examId) => {
  return exams.find(exam => exam.id === examId);
};

exports.getExamsByAbiturientId = (abiturientId) => {
    return exams.filter(exam => exam.abiturientId === abiturientId);
  };
  
  exports.getExamsByTeacherId = (teacherId) => {
    return exams.filter(exam => exam.teacherId === teacherId);
  };

  exports.getTeachersByExamId = (examId) => {
    const exam = exams.find(exam => exam.id === examId);
    if (!exam) {
      return null;
    }
    return teachers.filter(teacher => teacher.id === exam.teacherId);
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

exports.updateExamsAbiturientIdToNull = (abiturientId) => {
    exams.forEach(exam => {
      if (exam.abiturientId === abiturientId) {
        exam.abiturientId = null;
        if (!exam.teacherId) {
          exports.deleteExam(exam.id);
        }
      }
    });
  };
  
  exports.updateExamsTeacherIdToNull = (teacherId) => {
    exams.forEach(exam => {
      if (exam.teacherId === teacherId) {
        exam.teacherId = null;
        if (!exam.abiturientId) {
          exports.deleteExam(exam.id);
        }
      }
    });
  };