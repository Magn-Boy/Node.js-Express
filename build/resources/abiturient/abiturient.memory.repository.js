/* eslint-disable no-unused-expressions */
import Abiturient from './abiturient.model.js';
/* eslint-enable no-unused-vars */
const abiturients = [];
export const getAllAbiturients = () => abiturients;
export const getAbiturientById = (abiturientId) => {
    const foundAbiturient = abiturients.find(abiturient => abiturient.id === abiturientId);
    return foundAbiturient || null;
};
export const createAbiturient = (abiturientData) => {
    const newAbiturient = new Abiturient(abiturientData.id || 0, abiturientData.lastName || '', abiturientData.firstName || '', abiturientData.numCertificate || 0);
    abiturients.push(newAbiturient);
    return newAbiturient;
};
export const updateAbiturient = (abiturientId, updatedAbiturientData) => {
    const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturients[index] = updatedAbiturientData;
        return true;
    }
    return false;
};
export const deleteAbiturient = (abiturientId) => {
    const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturients.splice(index, 1)[0];
        return true;
    }
    return false;
};
//# sourceMappingURL=abiturient.memory.repository.js.map