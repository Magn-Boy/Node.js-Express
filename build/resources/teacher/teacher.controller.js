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
exports.deleteTeacher = exports.updateTeacher = exports.createTeacher = exports.getTeacherExams = exports.getTeacherById = exports.getAllTeachers = void 0;
const teacherService = __importStar(require("./teacher.service"));
const getAllTeachers = (_req, res) => {
    try {
        const teachers = teacherService.getAllTeachers();
        res.status(200).json(teachers);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
exports.getAllTeachers = getAllTeachers;
const getTeacherById = (req, res) => {
    try {
        const { teacherId } = req.params;
        const teacher = teacherService.getTeacherById(teacherId);
        if (!teacher) {
            res.status(404).json({ message: "Teacher not found" });
        }
        else {
            res.status(200).json(teacher);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.getTeacherById = getTeacherById;
const getTeacherExams = (req, res) => {
    try {
        const { teacherId } = req.params;
        const exams = teacherService.getTeacherExams(teacherId);
        res.status(200).json(exams);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.getTeacherExams = getTeacherExams;
const createTeacher = (req, res) => {
    try {
        const teacherData = req.body;
        const createdTeacher = teacherService.createTeacher(teacherData);
        res.status(201).json(createdTeacher);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.createTeacher = createTeacher;
const updateTeacher = (req, res) => {
    try {
        const { teacherId } = req.params;
        const updatedTeacherData = req.body;
        const updatedTeacher = teacherService.updateTeacher(teacherId, updatedTeacherData);
        if (updatedTeacher) {
            res.status(200).json(updatedTeacher);
        }
        else {
            res.status(404).json({ message: "Teacher not found" });
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.updateTeacher = updateTeacher;
const deleteTeacher = (req, res) => {
    try {
        const { teacherId } = req.params;
        teacherService.deleteTeacher(teacherId);
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.deleteTeacher = deleteTeacher;
//# sourceMappingURL=teacher.controller.js.map