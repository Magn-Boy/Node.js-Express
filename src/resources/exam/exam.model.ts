class Exam {
  id: string;
  abiturientId: string | null;
  teacherId: string | null;
  subject: string;
  date: string;
  score: number;
  login?: string;

    constructor(id: string, abiturientId: string, teacherId: string, subject: string, date: string, score: number) {
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
  