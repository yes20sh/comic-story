import express from 'express';
import comicRoute from './routes/comicRoute.js'
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Mount user routes at /api/users
app.use('/api/users', comicRoute);

export default app;
