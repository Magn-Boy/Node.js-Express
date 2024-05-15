const Teacher = require('./teacher.model');

const teachers = [];

exports.teachers = teachers;

exports.getAllTeachers = () => {
  return teachers;
};

exports.getTeacherById = (teacherId) => {
  return teachers.find(teacher => teacher.id === teacherId);
};

exports.createTeacher = (teacherData) => {
  const newTeacher = new Teacher(
    teacherData.id,
    teacherData.lastName,
    teacherData.firstName,
    teacherData.degree
  );
  teachers.push(newTeacher);
  return newTeacher;
};

exports.updateTeacher = (teacherId, updatedTeacherData) => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    teachers[index] = { ...teachers[index], ...updatedTeacherData };
    return teachers[index];
  }
  return null;
};

exports.deleteTeacher = (teacherId) => {
  const index = teachers.findIndex(teacher => teacher.id === teacherId);
  if (index !== -1) {
    return teachers.splice(index, 1)[0];
  }
  return null;
};