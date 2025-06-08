// src/app.js

import express from 'express';

import userRoute from './routes/userRoutes'


const app = express();

app.use('/api/user', userRoute);      

export default app;