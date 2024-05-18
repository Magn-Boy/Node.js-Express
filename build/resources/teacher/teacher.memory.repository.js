import Teacher from './teacher.model';
export const teachers = [];
export const getAllTeachers = () => teachers;
export const getTeacherById = (teacherId) => teachers.find(teacher => teacher.id === teacherId);
export const createTeacher = (teacherData) => {
    const newTeacher = new Teacher(teacherData.id || 0, teacherData.lastName || '', teacherData.firstName || '', teacherData.degree || '');
    teachers.push(newTeacher);
    return newTeacher;
};
export const updateTeacher = (teacherId, updatedTeacherData) => {
    const index = teachers.findIndex(teacher => teacher.id === teacherId);
    if (index !== -1) {
        teachers[index] = updatedTeacherData;
        return true;
    }
    return false;
};
export const deleteTeacher = (teacherId) => {
    const index = teachers.findIndex(teacher => teacher.id === teacherId);
    if (index !== -1) {
        teachers.splice(index, 1)[0];
        return true;
    }
    return false;
};
//# sourceMappingURL=teacher.memory.repository.js.map