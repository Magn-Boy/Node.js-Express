import express from 'express';
import errorHandler from './middleware/errorhandler.js';
import requestLogger from './middleware/requestlogger.js';
import abiturientRouter from './resources/abiturient/abiturient.router.js';
import examRouter from './resources/exam/exam.router.js';
import teacherRouter from './resources/teacher/teacher.router.js';
const app = express();
app.use(express.json());
app.use(requestLogger);
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);
app.use(errorHandler);
export default app;
//# sourceMappingURL=app.js.map