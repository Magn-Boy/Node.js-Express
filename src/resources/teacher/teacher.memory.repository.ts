/* eslint-disable no-unused-expressions */
import Teacher from './teacher.model';

export const teacherData: Teacher[] = [];

export const getAllTeachers = async (): Promise<Teacher[]> => teacherData; 

export const getTeacherById = async (teacherId: number)=> teacherData.find((teacher) => teacher.id === teacherId);

export const createTeacher = (teacher: Teacher) => {
  teacherData.push(teacher);
  return teacher;
};

export const updateTeacher = async (teacherId: number, updatedTeacher: Teacher) => {
  const index = teacherData.findIndex((teacher: Teacher) => teacher.id === teacherId);
  if (index !== -1) {
    teacherData[index] = updatedTeacher;
    return true;
  }
    return false;
};

export const deleteTeacher = async (teacherId: number) => {
  const index = teacherData.findIndex((teacher: Teacher) => teacher.id === teacherId);
  if (index !== -1) {
    teacherData.splice(index, 1);
    return true;
  }
  return false;
};

/* eslint-enable no-unused-expressions */