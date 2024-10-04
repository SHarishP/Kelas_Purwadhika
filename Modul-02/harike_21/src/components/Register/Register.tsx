import { Formik, Form, Field, FormikProps } from "formik";
import IUsersData from "../../interfaces/UsersData.interface";
import axios from "axios";
import Schema from "./schema";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Register() {
  const navigate = useNavigate();

  const postUser = async (params: IUsersData) => {
    try {
      await axios.post(
        "https://66fd3be0c3a184a84d199284.mockapi.io/api/v1/users",
        {
          name: params.name,
          email: params.email,
          password: params.password,
        }
      );
      toast.success("User registered successfully!", {
        onClose: () => {
          navigate("/");
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div>
        <ToastContainer position="top-right" autoClose={2000} theme="dark" />
        <Formik
          initialValues={{ id: 0, name: "", email: "", password: "" }}
          validationSchema={Schema}
          onSubmit={(values) => {
            postUser(values);
          }}
        >
          {(props: FormikProps<IUsersData>) => {
            const { values, errors, touched, handleChange } = props;

            return (
              <Form>
                <div>
                  <label htmlFor="name">Name :</label>
                  <Field
                    type="text"
                    name="name"
                    onChange={handleChange}
                    values={values.name}
                  />
                  {touched.name && errors.name ? (
                    <div>{errors.name}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="email">Email :</label>
                  <Field
                    type="text"
                    name="email"
                    onChange={handleChange}
                    values={values.email}
                  />
                  {touched.email && errors.email ? (
                    <div>{errors.email}</div>
                  ) : null}
                </div>
                <div>
                  <label htmlFor="password">Password :</label>
                  <Field
                    type="password"
                    name="password"
                    onChange={handleChange}
                    values={values.password}
                  />
                  {touched.password && errors.password ? (
                    <div>{errors.password}</div>
                  ) : null}
                </div>
                <button type="submit">Save</button>
              </Form>
            );
          }}
        </Formik>
      </div>
    </div>
  );
}

export default Register;
