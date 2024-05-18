class Teacher {
    id;
    lastName;
    firstName;
    degree;
    login;
    constructor(id, lastName, firstName, degree) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.degree = degree;
    }
    static toResponse(user) {
        const { id, lastName, firstName, degree, login } = user;
        return { id, lastName, firstName, degree, login };
    }
}
export default Teacher;
//# sourceMappingURL=teacher.model.js.map