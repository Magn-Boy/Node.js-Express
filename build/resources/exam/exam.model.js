class Exam {
    id;
    abiturientId;
    teacherId;
    subject;
    date;
    score;
    login;
    constructor(id, abiturientId, teacherId, subject, date, score) {
        this.id = id;
        this.abiturientId = abiturientId;
        this.teacherId = teacherId;
        this.subject = subject;
        this.date = date;
        this.score = score;
    }
    static toResponse(user) {
        const { id, abiturientId, teacherId, subject, date, score, login } = user;
        return { id, abiturientId, teacherId, subject, date, score, login };
    }
}
export default Exam;
//# sourceMappingURL=exam.model.js.map