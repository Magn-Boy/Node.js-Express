import { Request, Response } from 'express';
import * as  abiturientService from './abiturient.service';

export const getAllAbiturients = (req: Request, res: Response): void => {
    try {
        const abiturients = abiturientService.getAllAbiturients();
        res.status(200).json(abiturients);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const getAbiturientById = (req: Response, res: Response): void => {
    try {
        const { abiturientId } = req.params;
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

export const getAbiturientExams = (req: Response, res: Response): void => {
    try {
        const abiturientId = req.params.abiturientId;
        const exams = abiturientService.getAbiturientExams(abiturientId);
        res.status(200).json(exams);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const createAbiturient = (req: Request, res: Response): void => {
    try {
        const abiturientData = req.body;
        const createdAbiturient = abiturientService.createAbiturient(abiturientData);
        res.status(201).json(createdAbiturient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const updateAbiturient = (req: Request, res: Response): void => {
    try {
        const { abiturientId } = req.params;
        const updatedAbiturientData = req.body;
        const updatedAbiturient = abiturientService.updateAbiturient(abiturientId, updatedAbiturientData);
        res.status(200).json(updatedAbiturient);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};

export const deleteAbiturient = (req: Request, res: Response): void => {
    try {
        const {abiturientId } = req.params;
        abiturientService.deleteAbiturient(abiturientId);
        res.status(204).end();
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
};
