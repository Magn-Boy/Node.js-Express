"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAbiturient = exports.updateAbiturient = exports.createAbiturient = exports.getAbiturientExams = exports.getAbiturientById = exports.getAllAbiturients = void 0;
const abiturientService = __importStar(require("./abiturient.service"));
const getAllAbiturients = (_req, res) => {
    try {
        const abiturients = abiturientService.getAllAbiturients();
        res.status(200).json(abiturients);
    }
    catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error' });
    }
};
exports.getAllAbiturients = getAllAbiturients;
const getAbiturientById = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const abiturient = abiturientService.getAbiturientById(abiturientId);
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
exports.getAbiturientById = getAbiturientById;
const getAbiturientExams = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const exams = abiturientService.getAbiturientExams(abiturientId);
        res.status(200).json(exams);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.getAbiturientExams = getAbiturientExams;
const createAbiturient = (req, res) => {
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
exports.createAbiturient = createAbiturient;
const updateAbiturient = (req, res) => {
    try {
        const { abiturientId } = req.params;
        const updatedAbiturientData = req.body;
        const updatedAbiturient = abiturientService.updateAbiturient(abiturientId, updatedAbiturientData);
        res.status(200).json(updatedAbiturient);
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.updateAbiturient = updateAbiturient;
const deleteAbiturient = (req, res) => {
    try {
        const { abiturientId } = req.params;
        abiturientService.deleteAbiturient(abiturientId);
        res.status(204).end();
    }
    catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
    }
};
exports.deleteAbiturient = deleteAbiturient;
//# sourceMappingURL=abiturient.controller.js.map