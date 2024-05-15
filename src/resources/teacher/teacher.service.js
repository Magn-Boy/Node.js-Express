const Teacher = require('./teacher.model');

const teachers = [];

exports.getTeacherById = (teacherId) => {
    return teacherRepository.getTeacherById(teacherId);
};

exports.getTeacherExams = (teacherId) => {
    return examRepository.getExamsByTeacherId(teacherId);
};

exports.createTeacher = (teacherData) => {
    return teacherRepository.createTeacher(teacherData);
};

exports.updateTeacher = (teacherId, updatedTeacherData) => {
    return teacherRepository.updateTeacher(teacherId, updatedTeacherData);
};

exports.deleteTeacher = (teacherId) => {
    return teacherRepository.deleteTeacher(teacherId);
};
