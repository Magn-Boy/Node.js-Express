import * as abiturientService from './abiturient.service';
export const getAllAbiturients = (_req, res) => {
    try {
        const abiturients = abiturientService.getAllAbiturients();
        res.status(200).json(abiturients);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
export const getAbiturientById = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const abiturient = abiturientService.getAbiturientById(parseInt(abiturientId, 10));
        if (!abiturient) {
            res.status(404).json({ message: "Abiturient not found" });
        }
        else {
            res.status(200).json(abiturient);
        }
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const getAbiturientExams = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const exams = abiturientService.getAbiturientExams(parseInt(abiturientId, 10));
        res.status(200).json(exams);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const createAbiturient = (req, res) => {
    try {
        const abiturientData = req.body;
        const createdAbiturient = abiturientService.createAbiturient(abiturientData);
        res.status(201).json(createdAbiturient);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const updateAbiturient = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const updatedAbiturientData = req.body;
        const updatedAbiturient = abiturientService.updateAbiturient(parseInt(abiturientId, 10), updatedAbiturientData);
        res.status(200).json(updatedAbiturient);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
export const deleteAbiturient = (req, res) => {
    try {
        const { abiturientId } = req.params;
        abiturientService.deleteAbiturient(parseInt(abiturientId, 10));
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
//# sourceMappingURL=abiturient.controller.js.map