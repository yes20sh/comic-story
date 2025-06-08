// routes/comicRoutes.js
import express from 'express';
import { createComic } from '../controllers/comicController.js';

const router = express.Router();

router.post('/generate', createComic);

export default router;
