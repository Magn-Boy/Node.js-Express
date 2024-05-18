import { Request, Response } from 'express';
import * as examService from './exam.service';

export const getAllExams = (req: Request, res: Response): void => {
    try {
        const exams = examService.getAllExams();
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const getExamById = (req: Request, res: Response): void => {
    try {
        const { examId } = req.params;
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

export const getExamTeachers = (req: Request, res: Response): void => {
    try {
        const { examId } = req.params;
        const teachers = examService.getExamTeachers(examId);
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const createExam = (req: Request, res: Response): void => {
    try {
        const examData = req.body;
        const createdExam = examService.createExam(examData);
        res.status(201).json(createdExam);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const updateExam = (req: Request, res: Response): void => {
    try {
        const { examId } = req.params;
        const updatedExamData = req.body;
        const updatedExam = examService.updateExam(examId, updatedExamData);
        res.status(200).json(updatedExam);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export cosnt deleteExam = (req: Request, res: Response): void => {
    try {
        const { examId } = req.params;
        examService.deleteExam(examId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
