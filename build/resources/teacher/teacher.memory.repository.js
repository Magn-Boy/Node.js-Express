export const teacherData = [];
export const getAllTeachers = async () => teacherData;
export const getTeacherById = async (teacherId) => teacherData.find((teacher) => teacher.id === teacherId);
export const createTeacher = (teacher) => {
    teacherData.push(teacher);
    return teacher;
};
export const updateTeacher = async (teacherId, updatedTeacher) => {
    const index = teacherData.findIndex((teacher) => teacher.id === teacherId);
    if (index !== -1) {
        teacherData[index] = updatedTeacher;
        return true;
    }
    return false;
};
export const deleteTeacher = async (teacherId) => {
    const index = teacherData.findIndex((teacher) => teacher.id === teacherId);
    if (index !== -1) {
        teacherData.splice(index, 1);
        return true;
    }
    return false;
};
/* eslint-enable no-unused-expressions */ 
//# sourceMappingURL=teacher.memory.repository.js.map