import { Router } from 'express';
const router = Router();
import * as noteController from '../controller/notes';
import { TokenValidation } from '../middleware/auth';
//define URL
router.post(
    "/notes",
    TokenValidation,
    noteController.createNote
);
router.get("/notes", noteController.getNotes);  

router.get(
    "/notes/:id",
    TokenValidation,
    noteController.getNote
); 
router.delete(
    "/notes/:id",
    TokenValidation,
    noteController.deleteNote
); 
router.put(
    "/notes/:id",
    TokenValidation,
    noteController.updateNotes
); 
router.get('/', noteController.getNote);
export default router