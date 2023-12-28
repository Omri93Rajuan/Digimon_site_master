import { shape, string, arrayOf, bool } from "prop-types";
import imageType from "./imageType";

const cardType = shape({
  _id: string,
  name: string.isRequired,
  nameInEn: string.isRequired,
  type: string.isRequired,
  description: string.isRequired,
  level: string.isRequired,
  likes: arrayOf(string).isRequired,
 image:imageType.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
});

export default cardType;
