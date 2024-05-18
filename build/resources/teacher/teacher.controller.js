import * as teacherService from './teacher.service';
export const getAllTeachers = (_req, res) => {
    try {
        const teachers = teacherService.getAllTeachers();
        res.status(200).json(teachers);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const getTeacherById = (req, res) => {
    try {
        const { teacherId } = req.params;
        const teacher = teacherService.getTeacherById(parseInt(teacherId, 5));
        if (!teacher) {
            res.status(404).json({ message: "Teacher not found" });
        }
        else {
            res.status(200).json(teacher);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const getTeacherExams = (req, res) => {
    try {
        const { teacherId } = req.params;
        const exams = teacherService.getTeacherExams(parseInt(teacherId, 5));
        res.status(200).json(exams);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const createTeacher = (req, res) => {
    try {
        const teacherData = req.body;
        const createdTeacher = teacherService.createTeacher(teacherData);
        res.status(201).json(createdTeacher);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const updateTeacher = (req, res) => {
    try {
        const { teacherId } = req.params;
        const updatedTeacherData = req.body;
        const updatedTeacher = teacherService.updateTeacher(parseInt(teacherId, 5), updatedTeacherData);
        if (updatedTeacher) {
            res.status(200).json(updatedTeacher);
        }
        else {
            res.status(404).json({ message: "Teacher not found" });
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const deleteTeacher = (req, res) => {
    try {
        const { teacherId } = req.params;
        teacherService.deleteTeacher(parseInt(teacherId, 5));
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
//# sourceMappingURL=teacher.controller.js.map