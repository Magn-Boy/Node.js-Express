class Teacher {
  id: string;
  lastName: string;
  firstName: string;
  degree: string;
  login?: string;

    constructor(id: string, lastName: string, firstName: string, degree: string) {
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
  