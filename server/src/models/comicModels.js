// models/comicModel.js
import mongoose from 'mongoose';

const panelSchema = new mongoose.Schema({
  imageUrl: String,
  dialogue: String,
});

const comicSchema = new mongoose.Schema({
  prompt: {
    type: String,
    required: true,
  },
  title: String,
  story: String,
  panels: [panelSchema],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Comic = mongoose.model('Comic', comicSchema);
export default Comic;
