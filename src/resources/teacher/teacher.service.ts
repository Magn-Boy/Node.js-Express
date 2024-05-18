import * as  teacherRepository from './teacher.memory.repository';
import * as examRepository from '../exam/exam.memory.repository';

import Teacher from './teacher.model';
import Exam from '../exam/exam.model';

export const getAllTeachers = (): Teacher[] => teacherRepository.getAllTeachers() 

export const getTeacherById = (teacherId: number): Teacher | undefined => teacherRepository.getTeacherById(teacherId) 

export const getTeacherExams = (teacherId: number): Exam[] => examRepository.getExamsByTeacherId(teacherId)

export const createTeacher = (teacherData: Partial<Teacher>): Teacher => teacherRepository.createTeacher(teacherData) 

export const updateTeacher = (teacherId: number, updatedTeacherData: Teacher): boolean => teacherRepository.updateTeacher(teacherId, updatedTeacherData) 

export const deleteTeacher = (teacherId: number): boolean => teacherRepository.deleteTeacher(teacherId) 
