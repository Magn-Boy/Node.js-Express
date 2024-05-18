import { Request, Response } from 'express';
import * as teacherService from './teacher.service';

export const getAllTeachers = (_req: Request, res: Response): void => {
    try {
        const teachers = teacherService.getAllTeachers();
        res.status(200).json(teachers);
      } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
      }
};

export const getTeacherById = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params as {teacherId: string};
        const teacher = teacherService.getTeacherById(teacherId);
        if (!teacher) {
          res.status(404).json({ message: "Teacher not found" });
        } else {
          res.status(200).json(teacher);
        }
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const getTeacherExams = (req: Request, res: Response): void  => {
    try {
        const {teacherId} = req.params as {teacherId: string};
        const exams = teacherService.getTeacherExams(teacherId);
        res.status(200).json(exams);
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const createTeacher = (req: Request, res: Response): void => {
    try {
        const teacherData = req.body;
        const createdTeacher = teacherService.createTeacher(teacherData);
        res.status(201).json(createdTeacher);
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const updateTeacher = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params as {teacherId: string};
        const updatedTeacherData = req.body;
        const updatedTeacher = teacherService.updateTeacher(teacherId, updatedTeacherData);
        if(updatedTeacher) {
          res.status(200).json(updatedTeacher);
        } else {
          res.status(404).json({message: "Teacher not found"});
        }
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const deleteTeacher = (req: Request, res: Response): void => {
    try {
        const {teacherId} = req.params as {teacherId: string};
        teacherService.deleteTeacher(teacherId);
        res.status(204).end();
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};
