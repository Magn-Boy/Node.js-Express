class Abiturient {
  id: string;
  lastName: string;
  firstName: string;
  numCertificate: string;
  login?: string;

    constructor(id: string, lastName: string, firstName: string, numCertificate: string) {
      this.id = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.numCertificate = numCertificate;
    }

    static toResponse(user: Abiturient): Partial<Abiturient> {
      const { id, lastName, firstName, numCertificate, login } = user;
      return { id, lastName, firstName, numCertificate, login };
    }
  }
  
  export default Abiturient;
  