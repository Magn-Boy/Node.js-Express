class Exam {
  id: number;

  abiturientId: number;

  teacherId: number;

  subject: string;

  date: string;

  score: number;

  login?: string;

  constructor({
    id,
    abiturientId,
    teacherId,
    subject,
    date,
    score
  }: {
    id?: number;
    abiturientId?: number;
    teacherId?: number;
    subject?: string;
    date?: string;
    score?: number;
  } = {}) {
    this.id = id || 0;
    this.abiturientId = abiturientId || 0;
    this.teacherId = teacherId || 0;
    this.subject = subject || '';
    this.date = date || '';
    this.score = score || 0;
  }

    static toResponse(exam: Exam): Exam {
      const { id, abiturientId, teacherId, subject, date, score, login } = exam;
      return { id, abiturientId, teacherId, subject, date, score, login };
    }
  }
  
  export default Exam;
  