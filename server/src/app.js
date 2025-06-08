import express from 'express';
import userRoute from './routes/userRoutes.js';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount user routes at /api/users
app.use('/api/users', userRoute);

export default app;
