const teacherRepository = require('./teacher.memory.repository');
const examRepository = require('../exam/exam.memory.repository.js');

const Teacher = require('./teacher.model.js');

const teachers = [];

exports.getAllTeachers = (teacherId) => teacherRepository.getAllTeachers();

exports.getTeacherById = (teacherId) => teacherRepository.getTeacherById(teacherId);

exports.getTeacherExams = (teacherId) => examRepository.getExamsByTeacherId(teacherId);

exports.createTeacher = (teacherData) => teacherRepository.createTeacher(teacherData);

exports.updateTeacher = (teacherId, updatedTeacherData) => teacherRepository.updateTeacher(teacherId, updatedTeacherData);

exports.deleteTeacher = (teacherId) => teacherRepository.deleteTeacher(teacherId);
