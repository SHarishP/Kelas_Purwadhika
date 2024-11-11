"use client";
import { Formik, Form, FormikProps } from "formik";
import Swal from "sweetalert2";
import axiosInstance from "@/lib/axios";
import IRegister from "../types";
import Schema from "./schema";
import ErrorHandler from "@/utils/error-handler";

import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const router = useRouter();

  // 15.3 Value ditangkap oleh function "register"
  const register = async (params: IRegister) => {
    try {
      // 15.4 Axios mengirimkan/menembak value ke localhost API yang pada case ini, port API merupakan Localhost:8080, ke endpoint "/auth/register". Karena merupakan method "post", maka membutuhkan params yang merupakan nama, email & password
      const { data } = await axiosInstance.post("/auth/register", params);
      // 15.5 Tambah console.log untuk mengecek, data apa saja yang dikirimkan. Setelah klik register, cek console.log pada browser
      console.log(data);
      // 15.6 Apabila success, maka akan muncul Object: {message: "Register Success"}. Dimana sudah sesuai dengan response pada saat register sukses (cek "auth.controller.ts" pada function "register")
      Swal.fire({
        icon: "success",
        // 15.7 Ketika value berhasil ditembak ke request, dan menerima response, response message akan dimunculkan oleh Swal
        title: data.message,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => router.push("/"));
      // 15.8 Fungsi ".then(() => router.push("/"));" akan mengembalikan ke homepage setelah register success
    } catch (err) {
      ErrorHandler(err);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        // 15.1 Ketika klik submit, value dari textbox akan ditangkap berdasarkan code berikut
        onSubmit={(values) => {
          // 15.2 Value yang ditangkap oleh formik, kemudian dikirim ke function "register"
          register(values);
        }}
      >
        {(props: FormikProps<IRegister>) => {
          const { values, errors, touched, handleChange } = props;
          return (
            <Form>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Name :
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                {touched.name && errors.name ? (
                  <div className="text-red-600">{errors.name}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email :
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="text"
                  name="email"
                  onChange={handleChange}
                  value={values.email}
                />
                {touched.email && errors.email ? (
                  <div className="text-red-600">{errors.email}</div>
                ) : null}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password :
                </label>
                <input
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  type="password"
                  name="password"
                  onChange={handleChange}
                  value={values.password}
                />
                {touched.password && errors.password ? (
                  <div className="text-red-600">{errors.password}</div>
                ) : null}
              </div>
              <button
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
                type="submit"
              >
                Register
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
