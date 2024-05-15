const teacherService = require('./teacher.service.js');

exports.getAllTeachers = (req, res) => {
    try {
        const teachers = teacherService.getAllTeachers();
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getTeacherById = (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        const teacher = teacherService.getTeacherById(teacherId);
        if (!teacher) {
          res.status(404).json({ message: "Teacher not found" });
        } else {
          res.status(200).json(teacher);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getTeacherExams = (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        const exams = teacherService.getTeacherExams(teacherId);
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.createTeacher = (req, res) => {
    try {
        const teacherData = req.body;
        const createdTeacher = teacherService.createTeacher(teacherData);
        res.status(201).json(createdTeacher);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.updateTeacher = (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        const updatedTeacherData = req.body;
        const updatedTeacher = teacherService.updateTeacher(teacherId, updatedTeacherData);
        res.status(200).json(updatedTeacher);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.deleteTeacher = (req, res) => {
    try {
        const teacherId = req.params.teacherId;
        teacherService.deleteTeacher(teacherId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
