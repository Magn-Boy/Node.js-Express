const abiturientRepository = require('./abiturient.memory.repository');
const examRepository = require('../exam/exam.memory.repository');

const Abiturient = require('./abiturient.model.js');

const abiturients = [];

exports.getAllAbiturients = () => {
    return abiturientRepository.getAllAbiturients();
  };

exports.getAbiturientById = (abiturientId) => {
    return abiturientRepository.getAbiturientById(abiturientId);
};

exports.getAbiturientExams = (abiturientId) => {
    return examRepository.getExamsByAbiturientId(abiturientId);
};

exports.createAbiturient = (abiturientData) => {
    return abiturientRepository.createAbiturient(abiturientData);
};

exports.updateAbiturient = (abiturientId, updatedAbiturientData) => {
    return abiturientRepository.updateAbiturient(abiturientId, updatedAbiturientData);
};

exports.deleteAbiturient = (abiturientId) => {
    return abiturientRepository.deleteAbiturient(abiturientId);
};
