import { Request, Response } from 'express';
import * as  abiturientService from './abiturient.service';

export const getAllAbiturients = (_req: Request, res: Response): void => {
    try {
        const abiturients = abiturientService.getAllAbiturients();
        res.status(200).json(abiturients);
      } catch (error) {
        res.status(500).json({ error: error instanceof Error ? error.message : 'Unknown error'});
      }
};

export const getAbiturientById = (req: Request, res: Response): void => {
    try {
        const { abiturientId } = req.params as { abiturientId: string };
        const abiturient = abiturientService.getAbiturientById(parseInt(abiturientId));
        if (!abiturient) {
          res.status(404).json({ message: "Abiturient not found" });
        } else {
          res.status(200).json(abiturient);
        }
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const getAbiturientExams = (req: Request, res: Response): void => {
    try {
        const { abiturientId } = req.params as { abiturientId: string };
        const exams = abiturientService.getAbiturientExams(parseInt(abiturientId));
        res.status(200).json(exams);
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const createAbiturient = (req: Request, res: Response): void => {
    try {
        const abiturientData = req.body;
        const createdAbiturient = abiturientService.createAbiturient(abiturientData);
        res.status(201).json(createdAbiturient);
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const updateAbiturient = (req: Request, res: Response): void => {
    try {
        const { abiturientId } = req.params as { abiturientId: string };
        const updatedAbiturientData = req.body;
        const updatedAbiturient = abiturientService.updateAbiturient(parseInt(abiturientId), updatedAbiturientData);
        res.status(200).json(updatedAbiturient);
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};

export const deleteAbiturient = (req: Request, res: Response): void => {
    try {
        const {abiturientId } = req.params as { abiturientId: string };
        abiturientService.deleteAbiturient(parseInt(abiturientId));
        res.status(204).end();
      } catch (error) {
        const errorMessage: string = error instanceof Error ? error.message : 'Unknown error';
        res.status(500).json({ error: errorMessage });
      }
};
