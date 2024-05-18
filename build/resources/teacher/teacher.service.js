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
const teacherRepository = __importStar(require("./teacher.memory.repository"));
const examRepository = __importStar(require("../exam/exam.memory.repository"));
const getAllTeachers = () => {
    return teacherRepository.getAllTeachers();
};
exports.getAllTeachers = getAllTeachers;
const getTeacherById = (teacherId) => {
    return teacherRepository.getTeacherById(teacherId);
};
exports.getTeacherById = getTeacherById;
const getTeacherExams = (teacherId) => {
    return examRepository.getExamsByTeacherId(teacherId);
};
exports.getTeacherExams = getTeacherExams;
const createTeacher = (teacherData) => {
    return teacherRepository.createTeacher(teacherData);
};
exports.createTeacher = createTeacher;
const updateTeacher = (teacherId, updatedTeacherData) => {
    return teacherRepository.updateTeacher(teacherId, updatedTeacherData);
};
exports.updateTeacher = updateTeacher;
const deleteTeacher = (teacherId) => {
    return teacherRepository.deleteTeacher(teacherId);
};
exports.deleteTeacher = deleteTeacher;
//# sourceMappingURL=teacher.service.js.map