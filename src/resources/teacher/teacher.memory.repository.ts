import Teacher from './teacher.model';

export const teachers: Teacher[] = [];

export const getAllTeachers = (): Teacher[] => teachers

export const getTeacherById = (teacherId: number): Teacher | undefined => teachers.find(teacher => teacher.id === teacherId)

export const createTeacher = (teacherData: Partial<Teacher>): Teacher => {
  const newTeacher = new Teacher(
    teacherData.id || 0,
    teacherData.lastName || '',
    teacherData.firstName || '',
    teacherData.degree || ''
  );
  teachers.push(newTeacher);
  return newTeacher;
};

export const updateTeacher = (teacherId: number, updatedTeacherData: Teacher): boolean => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    teachers[index] =  updatedTeacherData;
    return true;
  }
  return false;
};

export const deleteTeacher = (teacherId: number): boolean => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    teachers.splice(index, 1)[0];
    return true;
  }
  return false;
};