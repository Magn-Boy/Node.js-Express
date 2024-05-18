import * as  teacherRepository from './teacher.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Teacher from './teacher.model';

export const getAllTeachers = (): Teacher[] => {
    return teacherRepository.getAllTeachers();
} 

export const getTeacherById = (teacherId: string): Teacher | undefined => {
    return teacherRepository.getTeacherById(teacherId);
} 

export const getTeacherExams = (teacherId: string): unknown[] => {
    return examRepository.getExamsByTeacherId(teacherId);
}

export const createTeacher = (teacherData: Partial<Teacher>): Teacher => {
    return teacherRepository.createTeacher(teacherData);
} 

export const updateTeacher = (teacherId: string, updatedTeacherData: Partial<Teacher>): Teacher | null => {
    return teacherRepository.updateTeacher(teacherId, updatedTeacherData);
} 

export const deleteTeacher = (teacherId: string ): Teacher | null => {
    return teacherRepository.deleteTeacher(teacherId);
} 
