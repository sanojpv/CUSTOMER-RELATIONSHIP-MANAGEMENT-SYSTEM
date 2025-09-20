import express from 'express';
import { createUser, deleteUserById, getAllUsers, getUserById, updateUserById } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/' , createUser);
userRouter.get('/', getAllUsers);
userRouter.get('/:id', getUserById);
userRouter.patch('/:id', updateUserById);
userRouter.delete('/:id', deleteUserById);

export default userRouter;