import {Router} from 'express';
const router = Router();
import * as noteController from '../controller/notes';
import passport from "passport";
//define URL
router.post(
    "/notes",
    //the Strategy in Auth mddleware is "jwt" for default
    passport.authenticate("jwt", { session: false }),
    noteController.createNote
);
router.get("/notes", noteController.getNotes);  

router.get(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    passport.authenticate("jwt", { session: false }),
    noteController.getNote
); 
router.delete(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    passport.authenticate("jwt", { session: false }),
    noteController.deleteNote
); 
router.put(
    "/notes/:id",
    //the Strategy in Auth mddleware is "jwt" for default
    passport.authenticate("jwt", { session: false }),
    noteController.updateNotes
); 
export default router