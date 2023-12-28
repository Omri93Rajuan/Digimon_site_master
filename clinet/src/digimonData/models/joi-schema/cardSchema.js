import Joi from "joi";

const urlRegex =
  /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/;

const cardSchema = {
  name: Joi.string().min(2).max(256).required(),
  nameInEN: Joi.string().min(2).max(256).required(),
  type: Joi.string().min(2).max(256).required(),
  description: Joi.string().min(2).max(1024).required(),
  level: Joi.string().allow(""),
  url: Joi.string()
  .ruleset.regex(
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
  )
  .rule({ message: "התמונה חייבת להיות עם URL תקין" })
  .allow(""),
alt: Joi.string().max(256).allow(""),
  
};

export default cardSchema;
