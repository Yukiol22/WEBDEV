import express from 'express';
import {
  getUsers,
  getUserById,
  postUser,
  putUser,
  deleteUser,
} from '../controllers/user-controller.js';
import { body } from 'express-validator';
import { validationErrors } from '../../middlewares/error-handlers.js';
const userRouter = express.Router();
userRouter
  .route('/')
  .get(getUsers)
  .post(
    body('name').trim().escape().notEmpty().withMessage('Name is required'),
    body('username')
      .trim()
      .isAlphanumeric()
      .isLength({ min: 3, max: 20 })
      .withMessage('Username must be 3-20 alphanumeric characters'),
    body('email').trim().isEmail().normalizeEmail().withMessage('Valid email required'),
    body('password')
      .trim()
      .isLength({ min: 8 })
      .withMessage('Password must be at least 8 characters long'),
    validationErrors,
    postUser
  );

userRouter.route('/:id').get(getUserById).put(putUser).delete(deleteUser);

export default userRouter;