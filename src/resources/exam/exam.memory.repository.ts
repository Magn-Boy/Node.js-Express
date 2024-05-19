import { teacherData } from '../teacher/teacher.memory.repository';
import Exam from './exam.model';

const examsData: Exam[] = [];

export const getAllExams = async (): Promise<Exam[]> => examsData;

export const getExamById =async (examId: number) => examsData.find((exam) => exam.id === examId);

export const getExamsByAbiturientId = async (abiturientId: number) => examsData.filter((exam) => exam.abiturientId === abiturientId);

export const getExamsByTeacherId = async (teacherId: number) => examsData.filter((exam) => exam.teacherId === teacherId);

export const getTeachersByExamId = async (examId: number) => {
  const exam = examsData.find((exam) => exam.teacherId === examId);
  if (!exam) {
    return null;
  }
  return teacherData.filter(teacher => teacher.id === exam.teacherId);
};

export const createExam = async (exam: Exam) => {
  examsData.push(exam);
  return exam
};

export const updateExam = async (examId: number, updatedExam: Exam) => {
  const index = examsData.findIndex((exam)=> exam.id === examId);
  if (index !== -1) {
    examsData[index] = updatedExam; 
    return true;
  }
  return false;
};

export const deleteExam = async (examId: number) => {
  const index = examsData.findIndex((exam) => exam.id === examId);
  if (index !== -1) {
    examsData.splice(index, 1);
    return true;
  }
  return false;
};