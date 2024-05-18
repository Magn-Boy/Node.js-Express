class Teacher {
  id: number;

  lastName: string;

  firstName: string;

  degree: string;

  login?: string;

    constructor(id: number, lastName: string, firstName: string, degree: string) {
      this.id = id;
      this.lastName = lastName;
      this.firstName = firstName;
      this.degree = degree;
    }

    static toResponse(user: Teacher) {
      const { id, lastName, firstName, degree, login } = user;
      return { id, lastName, firstName, degree, login };
    }
  }
  
export default Teacher;