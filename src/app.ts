import express, {Request, Response} from 'express';

import abiturientRouter from './resources/abiturient/abiturient.router';
import examRouter from './resources/exam/exam.router';
import teacherRouter from './resources/teacher/teacher.router';

const app = express();

app.use(express.json());

app.use('/', (req: Request, res: Response) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    
  }
});

app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

export default app;
