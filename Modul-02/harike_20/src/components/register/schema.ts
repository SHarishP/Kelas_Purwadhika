import { object, string } from "yup";

const Schema = object({
    firstName: string()
    .min(3, "First name must be 3 characters")
    .max(10, "First name can not be more than 10 characters")
    .required("Required"),
    lastName: string()
    .min(3, "First name must be 3 characters")
    .max(10, "First name can not be more than 10 characters")
    .required("Required"),
    email: string().email("Invalid format").required("Required"),
    password: string()
    .min(3, "First name must be 3 characters")
    .matches(
        /^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/,
        "Password need to have atleast 1 number and special character"
    )
    .required("Required")  
});

export default Schema;

/* 
    import { object } from "yup"; akan membuat schema dari validasi kita, atau aturan-aturan yang harus diikuti
*/