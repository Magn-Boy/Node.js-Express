class Exam {
  id: number;

  abiturientId: number | null;

  teacherId: number | null;

  subject: string;

  date: string;

  score: number;

  login?: string;

    constructor(id: number, abiturientId: number, teacherId: number, subject: string, date: string, score: number) {
      this.id = id;
      this.abiturientId = abiturientId;
      this.teacherId = teacherId;
      this.subject = subject;
      this.date = date;
      this.score = score;
    }

    static toResponse(user: Exam): Partial<Exam> {
      const { id, abiturientId, teacherId, subject, date, score, login } = user;
      return { id, abiturientId, teacherId, subject, date, score, login };
    }
  }
  
  export default Exam;
  