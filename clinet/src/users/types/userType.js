import { shape, string, number, arrayOf} from "prop-types";
import imageType from "../../cards/models/types/imageType";

const userType = shape({
  _id: string,
  name: arrayOf(string),
  image: imageType.isRequired,
  bizNumber: number.isRequired,
  phone: string.isRequired,
  email: string.isRequired,
  user_id: string.isRequired,
  createdAt: string.isRequired,
  isbusiness:string.isRequired,
  isAdmin:string.isRequired,

});

export default userType;
