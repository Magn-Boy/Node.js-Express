const express = require('express');

const userRouter = require('./resources/users/user.router.js');
const abiturientRouter = require('./resources/abiturient/abiturient.router.js');
const examRouter = require('./resources/exam/exam.router.js');
const teacherRouter = require('./resources/teacher/teacher.router.js');

const { PORT } = require('./common/config.js');

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

module.exports = app;
