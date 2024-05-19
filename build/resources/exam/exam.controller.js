import * as examService from './exam.service.js';
export const getAllExams = (_req, res) => {
    try {
        const exams = examService.getAllExams();
        res.status(200).json(exams);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const getExamById = (req, res) => {
    try {
        const { examId } = req.params;
        const exam = examService.getExamById(parseInt(examId, 10));
        if (!exam) {
            res.status(404).json({ message: "Exam not found" });
        }
        else {
            res.status(200).json(exam);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const getExamTeachers = (req, res) => {
    try {
        const { examId } = req.params;
        const teachers = examService.getExamTeachers(parseInt(examId, 10));
        res.status(200).json(teachers);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const createExam = (req, res) => {
    try {
        const examData = req.body;
        const createdExam = examService.createExam(examData);
        res.status(201).json(createdExam);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const updateExam = (req, res) => {
    try {
        const { examId } = req.params;
        const updatedExamData = req.body;
        const updatedExam = examService.updateExam(parseInt(examId, 10), updatedExamData);
        res.status(200).json(updatedExam);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const deleteExam = (req, res) => {
    try {
        const { examId } = req.params;
        examService.deleteExam(parseInt(examId, 10));
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
//# sourceMappingURL=exam.controller.js.map