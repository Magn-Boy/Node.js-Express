import { Request, Response } from 'express';
import * as teacherService from './teacher.service';

export const getAllTeachers = (req: Request, res: Response): void => {
    try {
        const teachers = teacherService.getAllTeachers();
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const getTeacherById = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params;
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

export const getTeacherExams = (req: Request, res: Response): void  => {
    try {
        const {teacherId} = req.params;
        const exams = teacherService.getTeacherExams(teacherId);
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const createTeacher = (req: Request, res: Response): void => {
    try {
        const teacherData = req.body;
        const createdTeacher = teacherService.createTeacher(teacherData);
        res.status(201).json(createdTeacher);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const updateTeacher = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params;
        const updatedTeacherData = req.body;
        const updatedTeacher = teacherService.updateTeacher(teacherId, updatedTeacherData);
        if(updatedTeacher) {
          res.status(200).json(updatedTeacher);
        } else {
          res.status(404).json({message: "Teacher not found"});
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const deleteTeacher = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params;
        teacherService.deleteTeacher(teacherId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
