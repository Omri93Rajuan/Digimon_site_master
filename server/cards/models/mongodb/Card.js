const mongoose = require("mongoose");
const Image = require("./Image");
const { DEFAULT_VALIDATION, URL } = require("../../helpers/mongooseValidators");

const cardSchema = new mongoose.Schema({
  name: DEFAULT_VALIDATION,
  nameInEn: DEFAULT_VALIDATION,
  description: {
    ...DEFAULT_VALIDATION,
    maxLength: 1024,
  },
  type: DEFAULT_VALIDATION,
  level: DEFAULT_VALIDATION,
  likes: [String],
  createdAt: {
    type: Date,
    default: Date.now,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
  },
  image: Image,
});

const Card = mongoose.model("card", cardSchema);

module.exports = Card;