import * as teacherRepository from './teacher.memory.repository.js';
import * as examRepository from '../exam/exam.memory.repository.js';
export const getAllTeachers = () => teacherRepository.getAllTeachers();
export const getTeacherById = (teacherId) => teacherRepository.getTeacherById(teacherId);
export const getTeacherExams = (teacherId) => examRepository.getExamsByTeacherId(teacherId);
export const createTeacher = (teacherData) => teacherRepository.createTeacher(teacherData);
export const updateTeacher = (teacherId, updatedTeacherData) => teacherRepository.updateTeacher(teacherId, updatedTeacherData);
export const deleteTeacher = (teacherId) => teacherRepository.deleteTeacher(teacherId);
//# sourceMappingURL=teacher.service.js.map