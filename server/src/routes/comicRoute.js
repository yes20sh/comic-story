// routes/comicRoute.js
import express from 'express';
import { createComic, getAllComics } from '../controllers/comicController.js';

const router = express.Router();

router.post('/', createComic);
router.get('/', getAllComics);

export default router;
