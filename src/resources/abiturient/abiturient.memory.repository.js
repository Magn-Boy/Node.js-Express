const Abiturient = require('./abiturient.model.js');

const abiturients = [];

exports.getAllAbiturients = () => {
  return abiturients;
};

exports.getAbiturientById = (abiturientId) => {
  return abiturients.find(abiturient => abiturient.id === abiturientId);
};

exports.createAbiturient = (abiturientData) => {
  const newAbiturient = new Abiturient(
    abiturientData.id,
    abiturientData.lastName,
    abiturientData.firstName,
    abiturientData.numCertificate
  );
  abiturients.push(newAbiturient);
  return newAbiturient;
};

exports.updateAbiturient = (abiturientId, updatedAbiturientData) => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    abiturients[index] = { ...abiturients[index], ...updatedAbiturientData };
    return abiturients[index];
  }
  return null;
};

exports.deleteAbiturient = (abiturientId) => {
  const index = abiturients.findIndex(abiturient => abiturient.id === abiturientId);
  if (index !== -1) {
    return abiturients.splice(index, 1)[0];
  }
  return null;
};