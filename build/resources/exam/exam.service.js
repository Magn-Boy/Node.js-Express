"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteExam = exports.updateExam = exports.createExam = exports.getExamTeachers = exports.getExamById = exports.getAllExams = void 0;
const examRepository = __importStar(require("./exam.memory.repository"));
const getAllExams = () => examRepository.getAllExams();
exports.getAllExams = getAllExams;
const getExamById = (examId) => examRepository.getExamById(examId);
exports.getExamById = getExamById;
const getExamTeachers = (examId) => examRepository.getTeachersByExamId(examId);
exports.getExamTeachers = getExamTeachers;
const createExam = (examData) => examRepository.createExam(examData);
exports.createExam = createExam;
const updateExam = (examId, updatedExamData) => examRepository.updateExam(examId, updatedExamData);
exports.updateExam = updateExam;
const deleteExam = (examId) => examRepository.deleteExam(examId);
exports.deleteExam = deleteExam;
//# sourceMappingURL=exam.service.js.map