// src/app.js

import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

// Import custom middleware and route modules
import errorMiddleware from './middlewares/errorMiddleware.js';
import authRoutes from './routes/authRoutes.js';
import portfolioRoutes from './routes/portfolioRoutes.js';
import publicRoutes from './routes/publicRoutes.js';
import feedbackRoutes from './routes/feedbackRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import templateRoutes from './routes/templateRoutes.js';

const app = express();

// --- CORS Configuration ---
const allowedOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:3000',
];

app.use(
  cors({
    origin: function (origin, callback) {
      // Allow requests with no origin (like mobile apps or curl requests)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS not allowed from this origin: ' + origin));
      }
    },
    credentials: true,
  })
);

// --- Built-in & Third-party Middleware ---
app.use(express.json());         // Parse JSON request bodies
app.use(cookieParser());         // Parse cookies for authentication
app.use(morgan('dev'));          // HTTP request logging

// --- API Routes ---
app.use('/api/auth', authRoutes);           // Authentication routes
app.use('/api/portfolio', portfolioRoutes); // Portfolio CRUD routes
app.use('/api/public', publicRoutes);       // Public content routes
app.use('/api/feedback', feedbackRoutes);   // Feedback routes
app.use('/api/search', searchRoutes);
app.use('/api/templateChoose', templateRoutes);       // Portfolio search routes

// --- Health Check Route (optional, but recommended) ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// --- Error Handling Middleware (should be last) ---
app.use(errorMiddleware);

export default app;