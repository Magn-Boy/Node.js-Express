const examService = require('./exam.service.js');

exports.getAllExams = (req, res) => {
    try {
        const exams = examService.getAllExams();
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getExamById = (req, res) => {
    try {
        const examId = req.params.examId;
        const exam = examService.getExamById(examId);
        if (!exam) {
          res.status(404).json({ message: "Exam not found" });
        } else {
          res.status(200).json(exam);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getExamTeachers = (req, res) => {
    try {
        const examId = req.params.examId;
        const teachers = examService.getExamTeachers(examId);
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.createExam = (req, res) => {
    try {
        const examData = req.body;
        const createdExam = examService.createExam(examData);
        res.status(201).json(createdExam);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.updateExam = (req, res) => {
    try {
        const examId = req.params.examId;
        const updatedExamData = req.body;
        const updatedExam = examService.updateExam(examId, updatedExamData);
        res.status(200).json(updatedExam);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.deleteExam = (req, res) => {
    try {
        const examId = req.params.examId;
        examService.deleteExam(examId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
