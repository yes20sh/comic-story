// controllers/comicController.js
import Comic from '../models/comicModel.js';
import { generateComicFromPrompt } from '../services/geminiService.js';

export const createComic = async (req, res) => {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({ message: 'Prompt is required' });
    }

    const comicData = await generateComicFromPrompt(prompt);

    const newComic = new Comic({
      prompt,
      title: comicData.title,
      story: comicData.story,
      panels: comicData.panels,
    });

    const savedComic = await newComic.save();
    res.status(201).json(savedComic);
  } catch (error) {
    console.error('Error generating comic:', error);
    res.status(500).json({ message: 'Failed to generate comic' });
  }
};
