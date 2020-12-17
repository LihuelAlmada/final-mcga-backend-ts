import { Router } from 'express'
import { signIn,signUp } from '../controller/users'

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.get('/');
export default router;