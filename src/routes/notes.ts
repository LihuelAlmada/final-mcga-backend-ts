import {Router} from 'express';
const router = Router();
import * as noteController from '../controller/notes';
import {TokenValidation} from '../middleware/auth';
//define URL
router.post(
    "/notes",
    //the Strategy in Auth mddleware is "jwt" for default
    //passport.authenticate("jwt", { session: false }),
    TokenValidation,
    noteController.createNote
);
router.get("/notes", noteController.getNotes);  

router.get(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    //passport.authenticate("jwt", { session: false }),
    TokenValidation,
    noteController.getNote
); 
router.delete(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    //passport.authenticate("jwt", { session: false }),
    TokenValidation,
    noteController.deleteNote
); 
router.put(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    //passport.authenticate("jwt", { session: false }),
    TokenValidation,
    noteController.updateNotes
); 
export default router