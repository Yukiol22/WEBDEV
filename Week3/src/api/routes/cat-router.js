import express from 'express';
import multer from 'multer';
import { body } from 'express-validator';
import { authenticateToken } from '../../middlewares/authentication.js';
import {
  getCat,
  getCatById,
  postCat,
  putCat,
  deleteCat
} from '../controllers/cat-controller.js';
import { upload } from '../../middlewares/upload.js';
import { validationErrors } from '../../middlewares/error-handlers.js';
const catRouter = express.Router();

catRouter
  .route('/')
  .get(getCat)
  .post(
    authenticateToken,
    upload.single('file'),
    body('cat_name')
      .trim()
      .escape()
      .isLength({ min: 3, max: 50 })
      .withMessage('Cat name must be 3-50 characters'),
    body('weight').isNumeric().withMessage('Weight must be a number'),
    body('birthdate').isISO8601().toDate().withMessage('Valid birthdate required (YYYY-MM-DD)'),
    validationErrors,
    postCat
  );

catRouter.route('/:id').get(getCatById).put(putCat).delete(deleteCat);
export default catRouter;