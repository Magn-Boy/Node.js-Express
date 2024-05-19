import { teacherData } from '../teacher/teacher.memory.repository';
const examsData = [];
export const getAllExams = async () => examsData;
export const getExamById = async (examId) => examsData.find((exam) => exam.id === examId);
export const getExamsByAbiturientId = async (abiturientId) => examsData.filter((exam) => exam.abiturientId === abiturientId);
export const getExamsByTeacherId = async (teacherId) => examsData.filter((exam) => exam.teacherId === teacherId);
export const getTeachersByExamId = async (examId) => {
    const exam = examsData.find((exam) => exam.teacherId === examId);
    if (!exam) {
        return null;
    }
    return teacherData.filter(teacher => teacher.id === exam.teacherId);
};
export const createExam = async (exam) => {
    examsData.push(exam);
    return exam;
};
export const updateExam = async (examId, updatedExam) => {
    const index = examsData.findIndex((exam) => exam.id === examId);
    if (index !== -1) {
        examsData[index] = updatedExam;
        return true;
    }
    return false;
};
export const deleteExam = async (examId) => {
    const index = examsData.findIndex((exam) => exam.id === examId);
    if (index !== -1) {
        examsData.splice(index, 1);
        return true;
    }
    return false;
};
//# sourceMappingURL=exam.memory.repository.js.map