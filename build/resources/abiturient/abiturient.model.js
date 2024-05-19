class Abiturient {
    id;
    lastName;
    firstName;
    numCertificate;
    login;
    constructor({ id, lastName, firstName, numCertificate, } = {}) {
        this.id = id || 0;
        this.lastName = lastName || '';
        this.firstName = firstName || '';
        this.numCertificate = numCertificate || 0;
    }
    static toResponse(abiturient) {
        const { id, lastName, firstName, numCertificate, login } = abiturient;
        return { id, lastName, firstName, numCertificate, login };
    }
}
export default Abiturient;
//# sourceMappingURL=abiturient.model.js.map