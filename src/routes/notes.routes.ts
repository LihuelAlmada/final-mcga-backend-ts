import {Router} from 'express';
const router = Router();
import {getNotes} from './notes.controller';
//define URL
router.get('/notes', getNotes);

export default router