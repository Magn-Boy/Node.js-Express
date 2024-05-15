const abiturientService = require('./abiturient.service.js');

exports.getAllAbiturients = (req, res) => {
    try {
        const abiturients = abiturientService.getAllAbiturients();
        res.status(200).json(abiturients);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getAbiturientById = (req, res) => {
    try {
        const abiturientId = req.params.abiturientId;
        const abiturient = abiturientService.getAbiturientById(abiturientId);
        if (!abiturient) {
          res.status(404).json({ message: "Abiturient not found" });
        } else {
          res.status(200).json(abiturient);
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.getAbiturientExams = (req, res) => {
    try {
        const abiturientId = req.params.abiturientId;
        const exams = abiturientService.getAbiturientExams(abiturientId);
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.createAbiturient = (req, res) => {
    try {
        const abiturientData = req.body;
        const createdAbiturient = abiturientService.createAbiturient(abiturientData);
        res.status(201).json(createdAbiturient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.updateAbiturient = (req, res) => {
    try {
        const abiturientId = req.params.abiturientId;
        const updatedAbiturientData = req.body;
        const updatedAbiturient = abiturientService.updateAbiturient(abiturientId, updatedAbiturientData);
        res.status(200).json(updatedAbiturient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

exports.deleteAbiturient = (req, res) => {
    try {
        const abiturientId = req.params.abiturientId;
        abiturientService.deleteAbiturient(abiturientId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
