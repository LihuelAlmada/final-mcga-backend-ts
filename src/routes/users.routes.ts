import {Router} from 'express';
const router = Router();
import * as userController from './users.controller';

router.post('/users', userController.createUser);
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUser);
router.delete('/users/:id', userController.deleteUser);
router.put('/users/:id', userController.updateUsers);

export default router