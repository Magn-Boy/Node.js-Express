import * as teacherRepository from './teacher.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Teacher from './teacher.model';

export const getAllTeachers = () => teacherRepository.getAllTeachers() 

export const getTeacherById = (teacherId: number) => teacherRepository.getTeacherById(teacherId)  

export const getTeacherExams = (teacherId: number) => examRepository.getExamsByTeacherId(teacherId)

export const createTeacher = (payload: Teacher) => {
    const teacher = new Teacher(payload);
    const teacherCreated = teacherRepository.createTeacher(teacher);
    return teacherCreated;
} 

export const updateTeacher = (teacherId: number, updatedTeacherData: Teacher) => {
    const existingTeacher = teacherRepository.getTeacherById(teacherId);
    if (!existingTeacher) {
        return false;
    }
    teacherRepository.updateTeacher(teacherId, updatedTeacherData);
    return true;
}

export const deleteTeacher = (teacherId: number) => teacherRepository.deleteTeacher(teacherId)  