import Abiturient from './abiturient.model';

const abiturients: Abiturient[] = [];

export const getAllAbiturients = (): Abiturient[] => {
  return abiturients;
} 

export const getAbiturientById = (abiturientId: string): Abiturient | undefined => {
  return abiturients.find(abiturient => abiturient.id === abiturientId);
} 

export const createAbiturient = (abiturientData: Partial<Abiturient>): Abiturient => {
  const newAbiturient = new Abiturient(
    abiturientData.id || '',
    abiturientData.lastName || '',
    abiturientData.firstName || '',
    abiturientData.numCertificate || ''
  );
  abiturients.push(newAbiturient);
  return newAbiturient;
};

export const updateAbiturient = (abiturientId: string, updatedAbiturientData: Partial<Abiturient>): Abiturient | null => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturients[index] = { ...abiturients[index], ...updatedAbiturientData };
    return abiturients[index];
  }
  return null;
};

export const deleteAbiturient = (abiturientId: string): Abiturient | null => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    return abiturients.splice(index, 1)[0];
  }
  return null;
};