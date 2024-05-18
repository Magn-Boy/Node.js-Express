import Exam from'./exam.model';
import {teachers} from '../teacher/teacher.memory.repository';

const exams: Exam[] = [];

export const getAllExams = (): Exam[] => exams;

export const getExamById = (examId: string): Exam | undefined => exams.find(exam => exam.id === examId);

export const getExamsByAbiturientId = (abiturientId: string): Exam[] => exams.filter(exam => exam.abiturientId === abiturientId);
  
export const getExamsByTeacherId = (teacherId: string): Exam[] => exams.filter(exam => exam.teacherId === teacherId);

export const getTeachersByExamId = (examId: string): unknown[] | null => {
    const exam = exams.find(exam => exam.id === examId);
    if (!exam) {
      return null;
    }
    return teachers.filter(teacher => teacher.id === exam.teacherId);
  };

export const createExam = (examData: Partial<Exam>): Exam => {
  const newExam = new Exam(
    examData.id || '',
    examData.abiturientId || '',
    examData.teacherId || '',
    examData.subject || '',
    examData.date || '',
    examData.score || 0
  );
  exams.push(newExam);
  return newExam;
};

export const updateExam = (examId: string, updatedExamData: Exam): boolean => {
  const index = exams.findIndex(exam => exam.id === examId);
  if (index !== -1) {
    exams[index] = updatedExamData;
    return true;
  }
  return false;
};

export const deleteExam = (examId: string): boolean => {
  const index = exams.findIndex(exam => exam.id === examId);
  if (index !== -1) {
    exams.splice(index, 1)[0];
    return true;

  }
  return false;
};

export const updateExamsAbiturientIdToNull = (abiturientId: string): void => {
    exams.forEach(exam => {
      if (exam.abiturientId === abiturientId) {
        exam.abiturientId = null;
        if (!exam.teacherId) {
          deleteExam(exam.id);
        }
      }
    });
  };
  
  export const updateExamsTeacherIdToNull = (teacherId: string): void  => {
    exams.forEach(exam => {
      if (exam.teacherId === teacherId) {
        exam.teacherId = null;
        if (!exam.abiturientId) {
          deleteExam(exam.id);
        }
      }
    });
  };