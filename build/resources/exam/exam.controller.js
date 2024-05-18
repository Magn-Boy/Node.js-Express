"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExam = exports.updateExam = exports.createExam = exports.getExamTeachers = exports.getExamById = exports.getAllExams = void 0;
const examService = __importStar(require("./exam.service"));
const getAllExams = (_req, res) => {
    try {
        const exams = examService.getAllExams();
        res.status(200).json(exams);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
exports.getAllExams = getAllExams;
const getExamById = (req, res) => {
    try {
        const { examId } = req.params;
        const exam = examService.getExamById(examId);
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
exports.getExamById = getExamById;
const getExamTeachers = (req, res) => {
    try {
        const { examId } = req.params;
        const teachers = examService.getExamTeachers(examId);
        res.status(200).json(teachers);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.getExamTeachers = getExamTeachers;
const createExam = (req, res) => {
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
exports.createExam = createExam;
const updateExam = (req, res) => {
    try {
        const { examId } = req.params;
        const updatedExamData = req.body;
        const updatedExam = examService.updateExam(examId, updatedExamData);
        res.status(200).json(updatedExam);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.updateExam = updateExam;
const deleteExam = (req, res) => {
    try {
        const { examId } = req.params;
        examService.deleteExam(examId);
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.deleteExam = deleteExam;
//# sourceMappingURL=exam.controller.js.map