/* eslint-disable no-unused-expressions */
import Abiturient from './abiturient.model';
/* eslint-enable no-unused-vars */

const abiturientData: Abiturient[] = [];

export const getAllAbiturients = async (): Promise<Abiturient[]> => abiturientData;

export const getAbiturientById = (abiturientId: number) => abiturientData.find((abiturient) => abiturient.id === abiturientId)

export const createAbiturient = (abiturient: Abiturient) => {
  abiturientData.push(abiturient);
  return abiturient;
};

export const updateAbiturient = (abiturientId: number, updatedAbiturient: Abiturient) => {
  const index = abiturientData.findIndex((abiturient: Abiturient) => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturientData[index] = updatedAbiturient;
    return true;
  }
  return false;
};

export const deleteAbiturient = (abiturientId: number) => {
  const index = abiturientData.findIndex((abiturient: Abiturient) => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturientData.splice(index, 1);
    return true;
  }
  return false;
};