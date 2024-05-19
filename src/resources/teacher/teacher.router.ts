import { Router, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import Teacher from './teacher.model';
import * as teacherService from './teacher.service';
import * as examRepository from '../exam/exam.memory.repository';
import Exam from '../exam/exam.model';

const router = Router();

router.route('/')
  .get(async (_req: Request, res: Response) => {
    const teachers = await teacherService.getAllTeachers();
    res.json(teachers.map((teacher: Teacher) => Teacher.toResponse(teacher)));
  })
  .post(async (req: Request, res: Response) => {
    const { id, lastName, firstName, degree} = req.body;

    const teacher = await teacherService.createTeacher({ id, lastName, firstName, degree });

    if (teacher) {
      res.status(StatusCodes.CREATED).json(Teacher.toResponse(teacher));
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  });


  router.route('/:teacherId')
  .get(async (req: Request, res: Response) => {
    const { teacherId }= req.params as {teacherId: string};
    const teacher = await teacherService.getTeacherById(parseInt(teacherId, 10));
    if (teacher) {
      res.json(Teacher.toResponse(teacher));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  })
  .put(async (req: Request, res: Response) => {
    const { teacherId }= req.params as {teacherId: string};
    const { lastName, firstName, degree } = req.body;
    const id = parseInt(teacherId, 10);
    const updatedTeacher = await teacherService.updateTeacher(parseInt(teacherId, 10), { id, lastName, firstName, degree });
    if (updatedTeacher) {
      res.status(StatusCodes.OK).json({ code: 'GOOD_REQUEST', msg: 'Good request' });
    } else {
      res.status(StatusCodes.BAD_REQUEST).json({ code: 'BAD_REQUEST', msg: 'Bad request' });
    }
  })
  .delete(async (req: Request, res: Response) => {
    const { teacherId }= req.params as {teacherId: string};
    const teacherDeleted = await teacherService.deleteTeacher(parseInt(teacherId, 10));
    if (teacherDeleted) {
      res.json(StatusCodes.OK);
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Category not found' });
    }
  });

  router.route('/:teacherId/exams')
  .get(async (req: Request, res: Response) => {
    const { teacherId }= req.params as {teacherId: string};
    const exam = await examRepository.getExamsByTeacherId(parseInt(teacherId, 10));
    if (exam) {
      res.json(exam.map((pizza: Exam) => Exam.toResponse(pizza)));
    } else {
      res.status(StatusCodes.NOT_FOUND).json({ code: 'NOT_FOUND', msg: 'Teacher not found' });
    }
  });

export default router;
