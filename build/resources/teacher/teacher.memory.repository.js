"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTeacher = exports.updateTeacher = exports.createTeacher = exports.getTeacherById = exports.getAllTeachers = exports.teachers = void 0;
const teacher_model_1 = __importDefault(require("./teacher.model"));
exports.teachers = [];
const getAllTeachers = () => {
    return exports.teachers;
};
exports.getAllTeachers = getAllTeachers;
const getTeacherById = (teacherId) => {
    return exports.teachers.find(teacher => teacher.id === teacherId);
};
exports.getTeacherById = getTeacherById;
const createTeacher = (teacherData) => {
    const newTeacher = new teacher_model_1.default(teacherData.id || '', teacherData.lastName || '', teacherData.firstName || '', teacherData.degree || '');
    exports.teachers.push(newTeacher);
    return newTeacher;
};
exports.createTeacher = createTeacher;
const updateTeacher = (teacherId, updatedTeacherData) => {
    const index = exports.teachers.findIndex(teacher => teacher.id === teacherId);
    if (index !== -1) {
        exports.teachers[index] = updatedTeacherData;
        return true;
    }
    return false;
};
exports.updateTeacher = updateTeacher;
const deleteTeacher = (teacherId) => {
    const index = exports.teachers.findIndex(teacher => teacher.id === teacherId);
    if (index !== -1) {
        exports.teachers.splice(index, 1)[0];
        return true;
    }
    return false;
};
exports.deleteTeacher = deleteTeacher;
//# sourceMappingURL=teacher.memory.repository.js.map