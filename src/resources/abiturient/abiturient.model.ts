class Abiturient {
  id: number;

  lastName: string;

  firstName: string;

  numCertificate: number;

  login?: string;

    constructor(id: number, lastName: string, firstName: string, numCertificate: number) {
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
  