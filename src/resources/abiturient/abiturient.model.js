class Abiturient {
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
  
  module.exports = Abiturient;
  