import express from 'express';
import cors from 'cors';
import apiRouter from './api/index.js';
import { notFoundHandler, errorHandler } from './middlewares/error-handlers.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/api/v1', apiRouter);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;