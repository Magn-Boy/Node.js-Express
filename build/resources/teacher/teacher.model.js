class Teacher {
    id;
    lastName;
    firstName;
    degree;
    login;
    constructor({ id, lastName, firstName, degree, } = {}) {
        this.id = id || 0;
        this.lastName = lastName || '';
        this.firstName = firstName || '';
        this.degree = degree || '';
    }
    static toResponse(teacher) {
        const { id, lastName, firstName, degree, login } = teacher;
        return { id, lastName, firstName, degree, login };
    }
}
export default Teacher;
//# sourceMappingURL=teacher.model.js.map