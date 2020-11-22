import {Router} from 'express';
const router = Router();
import * as noteController from './notes.controller';
//define URL
router.post('/notes', noteController.createNote);
router.get('/notes', noteController.getNotes);
router.get('/notes/:id', noteController.getNote);
router.delete('/notes/:id', noteController.deleteNote);
router.put('/notes/:id', noteController.updateNotes);

export default router