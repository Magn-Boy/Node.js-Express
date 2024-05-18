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
exports.deleteAbiturient = exports.updateAbiturient = exports.createAbiturient = exports.getAbiturientExams = exports.getAbiturientById = exports.getAllAbiturients = void 0;
const abiturientRepository = __importStar(require("./abiturient.memory.repository"));
const examRepository = __importStar(require("../exam/exam.memory.repository"));
const getAllAbiturients = () => {
    return abiturientRepository.getAllAbiturients();
};
exports.getAllAbiturients = getAllAbiturients;
const getAbiturientById = (abiturientId) => {
    return abiturientRepository.getAbiturientById(abiturientId);
};
exports.getAbiturientById = getAbiturientById;
const getAbiturientExams = (abiturientId) => {
    return examRepository.getExamsByAbiturientId(abiturientId);
};
exports.getAbiturientExams = getAbiturientExams;
const createAbiturient = (abiturientData) => {
    return abiturientRepository.createAbiturient(abiturientData);
};
exports.createAbiturient = createAbiturient;
const updateAbiturient = (abiturientId, updatedAbiturientData) => {
    return abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
};
exports.updateAbiturient = updateAbiturient;
const deleteAbiturient = (abiturientId) => {
    return abiturientRepository.deleteAbiturient(abiturientId);
};
exports.deleteAbiturient = deleteAbiturient;
//# sourceMappingURL=abiturient.service.js.map