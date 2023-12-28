import Joi from "joi";

const signupSchema = {
  first: Joi.string().min(2).max(256).required(),
  last: Joi.string().min(2).max(256).required(),
  email: Joi.string()
    .ruleset.pattern(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
    .rule({ message: `הדוא"ל חייב להיות תקין` })
    .required(),
  password: Joi.string()
    .ruleset.regex(
      /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
    )
    .rule({
      message:
      "הסיסמה חייבת לכלול 7 תווים, אות גדולה וקטנה באנגלית ואחד מהסימנים הבאים: !@#$%^&*-",
    })
    .required(),
  url: Joi.string()
    .ruleset.regex(
      /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
    )
    .rule({ message: "התמונה חייבת להיות עם URL תקין" })
    .allow(""),
  alt: Joi.string().max(256).allow(""),
  zip: Joi.number().allow(""),
  isBusiness: Joi.boolean().required(),
};

export default signupSchema;
