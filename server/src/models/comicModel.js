// models/comicModel.js
import mongoose from 'mongoose';

const comicSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true }
});

const Comic = mongoose.model('Comic', comicSchema);
export default Comic;
