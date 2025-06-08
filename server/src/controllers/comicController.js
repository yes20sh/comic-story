// controllers/comicController.js
import Comic from '../models/comicModel.js';

export const createComic = async (req, res) => {
  try {
    const { title, description, name, email } = req.body;
    const comic = new Comic({ title, description, name, email });
    await comic.save();
    res.status(201).json(comic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.status(200).json(comics);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
