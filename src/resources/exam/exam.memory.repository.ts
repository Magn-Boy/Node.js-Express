import Exam from './exam.model';
import { teachers } from '../teacher/teacher.memory.repository';

const exams: Exam[] = [];

export const getAllExams = (): Exam[] => exams;

export const getExamById = (examId: number): Exam | undefined => exams.find(e => e.id === examId);

export const getExamsByAbiturientId = (abiturientId: number): Exam[] => exams.filter(e => e.abiturientId === abiturientId);

export const getExamsByTeacherId = (teacherId: number): Exam[] => exams.filter(e => e.teacherId === teacherId);

export const getTeachersByExamId = (examId: number): unknown[] | null => {
  const exam = exams.find(e => e.id === examId);
  if (!exam) {
    return null;
  }
  return teachers.filter(teacher => teacher.id === exam.teacherId);
};

export const createExam = (examData: Partial<Exam>): Exam => {
  const newExam = new Exam(
    examData.id || 0,
    examData.abiturientId || 0,
    examData.teacherId || 0,
    examData.subject || '',
    examData.date || '',
    examData.score || 0
  );
  exams.push(newExam);
  return newExam;
};

export const updateExam = (examId: number, updatedExamData: Exam): boolean => {
  const index = exams.findIndex(e => e.id === examId);
  if (index !== -1) {
    exams[index] = { ...exams[index], ...updatedExamData }; // Создаем новый объект, копируя все свойства из существующего и обновленного экземпляра
    return true;
  }
  return false;
};

export const deleteExam = (examId: number): boolean => {
  const index = exams.findIndex(e => e.id === examId);
  if (index !== -1) {
    exams.splice(index, 1);
    return true;
  }
  return false;
};

export const updateExamsAbiturientIdToNull = (abiturientId: number): void => {
  exams.forEach(exam => {
    if (exam.abiturientId === abiturientId) {
      exam = { ...exam, abiturientId: null }; // Создаем новый объект с обновленным свойством abiturientId
      if (!exam.teacherId) {
        deleteExam(exam.id);
      }
    }
  });
};

export const updateExamsTeacherIdToNull = (teacherId: number): void => {
  exams.forEach(exam => {
    if (exam.teacherId === teacherId) {
      exam = { ...exam, teacherId: null }; // Создаем новый объект с обновленным свойством teacherId
      if (!exam.abiturientId) {
        deleteExam(exam.id);
      }
    }
  });
};
