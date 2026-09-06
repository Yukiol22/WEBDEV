import express from 'express';
import api from './api/index.js';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.use('/api/v1', api);
app.use(cors());
export default app;