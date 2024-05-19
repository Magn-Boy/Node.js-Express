/* eslint-enable no-unused-vars */
const abiturientData = [];
export const getAllAbiturients = async () => abiturientData;
export const getAbiturientById = (abiturientId) => abiturientData.find((abiturient) => abiturient.id === abiturientId);
export const createAbiturient = (abiturient) => {
    abiturientData.push(abiturient);
    return abiturient;
};
export const updateAbiturient = (abiturientId, updatedAbiturient) => {
    const index = abiturientData.findIndex((abiturient) => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturientData[index] = updatedAbiturient;
        return true;
    }
    return false;
};
export const deleteAbiturient = (abiturientId) => {
    const index = abiturientData.findIndex((abiturient) => abiturient.id === abiturientId);
    if (index !== -1) {
        abiturientData.splice(index, 1);
        return true;
    }
    return false;
};
//# sourceMappingURL=abiturient.memory.repository.js.map