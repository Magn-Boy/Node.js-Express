class Teacher {
  id: number;

  lastName: string;

  firstName: string;

  degree: string;

  login?: string;

  constructor({
    id,
    lastName,
    firstName,
    degree,
  }: {
    id?: number;
    lastName?: string;
    firstName?: string;
    degree?: string;
  } = {}) {
    this.id = id || 0;
    this.lastName = lastName || '';
    this.firstName = firstName || '';
    this.degree = degree || '';
  }

    static toResponse(teacher: Teacher): Teacher {
      const { id, lastName, firstName, degree, login } = teacher;
      return { id, lastName, firstName, degree, login };
    }
  }
  
export default Teacher;