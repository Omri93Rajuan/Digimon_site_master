import Joi from "joi";

const userSchema = {
  first: Joi.string().min(2).max(256).required(),
  last: Joi.string().min(2).max(256).required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: `הדוא"ל חייב להיות תקין` })
    .required(),
  
  url: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "התמונה חייבת להיות עם URL תקין" })
    .allow(""),
  alt: Joi.string().max(256).allow(""),
  isBusiness: Joi.boolean().required(),
};

export default userSchema;
