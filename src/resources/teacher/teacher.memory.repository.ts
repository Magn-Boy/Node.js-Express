import Teacher from './teacher.model';

export const teachers: Teacher[] = [];

export const getAllTeachers = (): Teacher[] => {
  return teachers;
}

export const getTeacherById = (teacherId: string ): Teacher | undefined => {
  return teachers.find(teacher => teacher.id === teacherId);
}

export const createTeacher = (teacherData: Partial<Teacher>): Teacher => {
  const newTeacher = new Teacher(
    teacherData.id || '',
    teacherData.lastName || '',
    teacherData.firstName || '',
    teacherData.degree || ''
  );
  teachers.push(newTeacher);
  return newTeacher;
};

export const updateTeacher = (teacherId: string, updatedTeacherData: Teacher): boolean => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    teachers[index] =  updatedTeacherData;
    return true;
  }
  return false;
};

export const deleteTeacher = (teacherId: string): boolean => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    teachers.splice(index, 1)[0];
    return true;
  }
  return false;
};