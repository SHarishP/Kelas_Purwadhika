import { Formik, Form, Field, FormikProps } from "formik";
import IUser from "../../interfaces/user.interface";
import axios from "axios";
import Schema from "./schema";

function Register() {

    const postUser = async (params: IUser) => {
        try {
            await axios.post(
                "https://66fd3be0c3a184a84d199284.mockapi.io/api/v1/users", {
                    firstName: params.firstName,
                    lastName: params.lastName,
                    email: params.email,
                    password: params.password
                }
            )
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div>
            <div>
                <Formik
                    initialValues={{
                        id: 0,
                        firstName: "",
                        lastName: "",
                        email: "",
                        password: "",
                    }}
                    validationSchema={Schema}
                    onSubmit={(values) => {
                        console.log(values);
                        postUser(values)
                    }}
                >
                    {(props: FormikProps<IUser>) => {
                        const { values, errors, touched, handleChange } = props;

                        return (
                            <Form>
                                <div>
                                    <label htmlFor="firstName">First Name : </label>
                                    <Field type="text" name="firstName" onChange={handleChange} values={values.firstName}/>
                                    {touched.firstName && errors.firstName ? (
                                        <div>{errors.firstName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="lastName">Last Name : </label>
                                    <Field type="text" name="lastName" onChange={handleChange} values={values.lastName}/>
                                    {touched.lastName && errors.lastName ? (
                                        <div>{errors.lastName}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="email">Email : </label>
                                    <Field type="text" name="email" onChange={handleChange} values={values.email}/>
                                    {touched.email && errors.email ? (
                                        <div>{errors.email}</div>
                                    ) : null}
                                </div>
                                <div>
                                    <label htmlFor="password">Password : </label>
                                    <Field type="password" name="password" onChange={handleChange} values={values.password}/>
                                    {touched.password && errors.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}
                                </div>
                                <button type="submit">Save</button>
                            </Form>
                        )
                    }}
                </Formik>
            </div>
        </div>
    );
}

export default Register;

/* 
    Validasi digunakan untuk pengecekan apakah input dari user sudah sesuai dengan apa yang developer minta.
*/