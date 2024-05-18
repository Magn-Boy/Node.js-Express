"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Abiturient {
    id;
    lastName;
    firstName;
    numCertificate;
    login;
    constructor(id, lastName, firstName, numCertificate) {
        this.id = id;
        this.lastName = lastName;
        this.firstName = firstName;
        this.numCertificate = numCertificate;
    }
    static toResponse(user) {
        const { id, lastName, firstName, numCertificate, login } = user;
        return { id, lastName, firstName, numCertificate, login };
    }
}
exports.default = Abiturient;
//# sourceMappingURL=abiturient.model.js.map