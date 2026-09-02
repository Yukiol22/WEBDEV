import express from 'express';
import multer from 'multer';
import { postCat } from '../controllers/cat-controller.js';

const upload = multer({ dest: 'uploads/' });
const catRouter = express.Router();

catRouter.route('/')
  .post(upload.single('cat'), postCat);

export default catRouter;