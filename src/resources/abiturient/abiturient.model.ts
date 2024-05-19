class Abiturient {
  id: number;

  lastName: string;

  firstName: string;

  numCertificate: number;

  login?: string;

  constructor({
    id,
    lastName,
    firstName,
    numCertificate,
  }: {
    id?: number;
    lastName?: string;
    firstName?: string;
    numCertificate?: number;
  } = {}) {
    this.id = id || 0;
    this.lastName = lastName || '';
    this.firstName = firstName || '';
    this.numCertificate = numCertificate || 0;
  }

    static toResponse(abiturient: Abiturient): Abiturient {
      const { id, lastName, firstName, numCertificate, login } = abiturient;
      return { id, lastName, firstName, numCertificate, login };
    }
  }
  
  export default Abiturient;
  