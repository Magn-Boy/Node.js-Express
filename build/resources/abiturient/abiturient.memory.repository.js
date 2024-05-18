"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAbiturient = exports.updateAbiturient = exports.createAbiturient = exports.getAbiturientById = exports.getAllAbiturients = void 0;
const abiturient_model_1 = __importDefault(require("./abiturient.model"));
const abiturients = [];
const getAllAbiturients = () => {
    return abiturients;
};
exports.getAllAbiturients = getAllAbiturients;
const getAbiturientById = (abiturientId) => {
    const foundAbiturient = abiturients.find(abiturient => abiturient.id === abiturientId);
    return foundAbiturient || null;
};
exports.getAbiturientById = getAbiturientById;
const createAbiturient = (abiturientData) => {
    const newAbiturient = new abiturient_model_1.default(abiturientData.id || '', abiturientData.lastName || '', abiturientData.firstName || '', abiturientData.numCertificate || '');
    abiturients.push(newAbiturient);
    return newAbiturient;
};
exports.createAbiturient = createAbiturient;
const updateAbiturient = (abiturientId, updatedAbiturientData) => {
    const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturients[index] = updatedAbiturientData;
        return true;
    }
    return false;
};
exports.updateAbiturient = updateAbiturient;
const deleteAbiturient = (abiturientId) => {
    const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturients.splice(index, 1)[0];
        return true;
    }
    return false;
};
exports.deleteAbiturient = deleteAbiturient;
//# sourceMappingURL=abiturient.memory.repository.js.map