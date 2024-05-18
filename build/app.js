"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const abiturient_router_1 = __importDefault(require("./resources/abiturient/abiturient.router"));
const exam_router_1 = __importDefault(require("./resources/exam/exam.router"));
const teacher_router_1 = __importDefault(require("./resources/teacher/teacher.router"));
//import { PORT } from './common/config';
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/', (req, res, next) => {
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    next();
});
app.use('/abiturients', abiturient_router_1.default);
app.use('/exams', exam_router_1.default);
app.use('/teachers', teacher_router_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map