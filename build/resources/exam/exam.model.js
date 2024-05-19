class Exam {
    id;
    abiturientId;
    teacherId;
    subject;
    date;
    score;
    login;
    constructor({ id, abiturientId, teacherId, subject, date, score } = {}) {
        this.id = id || 0;
        this.abiturientId = abiturientId || 0;
        this.teacherId = teacherId || 0;
        this.subject = subject || '';
        this.date = date || '';
        this.score = score || 0;
    }
    static toResponse(exam) {
        const { id, abiturientId, teacherId, subject, date, score, login } = exam;
        return { id, abiturientId, teacherId, subject, date, score, login };
    }
}
export default Exam;
//# sourceMappingURL=exam.model.js.map