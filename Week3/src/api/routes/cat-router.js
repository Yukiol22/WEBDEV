import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';
import { createThumbnail } from '../../middlewares/upload.js';

const upload = multer({ dest: 'uploads/' });
const catRouter = express.Router();

catRouter.route('/')
  .post(upload.single('cat'), createThumbnail, postCat);

export default catRouter;