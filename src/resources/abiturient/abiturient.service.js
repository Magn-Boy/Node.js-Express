const Abiturient = require('./abiturient.model');

const abiturients = [];

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
