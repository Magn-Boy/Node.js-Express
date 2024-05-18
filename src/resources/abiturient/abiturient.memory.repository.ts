import Abiturient from './abiturient.model';

const abiturients: Abiturient[] = [];

export const getAllAbiturients = (): Abiturient[] => {
  return abiturients;
} 

export const getAbiturientById = (abiturientId: number): Abiturient | null => {
  const foundAbiturient = abiturients.find(abiturient => abiturient.id === abiturientId);
  return foundAbiturient || null;
} 

export const createAbiturient = (abiturientData: Partial<Abiturient>): Abiturient => {
  const newAbiturient = new Abiturient(
    abiturientData.id || 0,
    abiturientData.lastName || '',
    abiturientData.firstName || '',
    abiturientData.numCertificate || ''
  );
  abiturients.push(newAbiturient);
  return newAbiturient;
};

export const updateAbiturient = (abiturientId: number, updatedAbiturientData: Abiturient): boolean => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturients[index] = updatedAbiturientData;
    return true;
  }
  return false;
};

export const deleteAbiturient = (abiturientId: number): boolean => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturients.splice(index, 1)[0];
    return true;
  }
  return false;
};