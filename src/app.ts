import express from 'express';

import userRouter from './resources/users/user.router';
import abiturientRouter from './resources/abiturient/abiturient.router';
import examRouter from'./resources/exam/exam.router';
import teacherRouter from'./resources/teacher/teacher.router';

import { PORT } from './common/config';

const app = express();
const port = PORT;

app.use(express.json());

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter);
app.use('/abiturients', abiturientRouter);
app.use('/exams', examRouter);
app.use('/teachers', teacherRouter);

export default app;
