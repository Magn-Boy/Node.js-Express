import * as teacherRepository from './teacher.memory.repository.js';
import * as examRepository from '../exam/exam.memory.repository.js';
import Teacher from './teacher.model.js';
export const getAllTeachers = () => teacherRepository.getAllTeachers();
export const getTeacherById = (teacherId) => teacherRepository.getTeacherById(teacherId);
export const getTeacherExams = (teacherId) => examRepository.getExamsByTeacherId(teacherId);
export const createTeacher = (payload) => {
    const teacher = new Teacher(payload);
    const teacherCreated = teacherRepository.createTeacher(teacher);
    return teacherCreated;
};
export const updateTeacher = (teacherId, updatedTeacherData) => {
    const existingTeacher = teacherRepository.getTeacherById(teacherId);
    if (!existingTeacher) {
        return false;
    }
    teacherRepository.updateTeacher(teacherId, updatedTeacherData);
    return true;
};
export const deleteTeacher = (teacherId) => teacherRepository.deleteTeacher(teacherId);
//# sourceMappingURL=teacher.service.js.map