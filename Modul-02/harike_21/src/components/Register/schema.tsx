import { object, string } from "yup";

const Schema = object({
  name: string().min(3, "Name must be 3 characters").required("Required"),
  email: string().email("Invalid format").required("Required"),
  password: string()
    .min(3, "First name must be 3 characters")
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).+/, //regEx
      "Password need to have atleast at least contain one lowercase, one uppercase, one number, and one symbol"
    )
    .required("Required"),
});

export default Schema;
