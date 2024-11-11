"use client";
import { Formik, Form, FormikProps } from "formik";
import Swal from "sweetalert2";
import axiosInstance from "@/lib/axios";
import ILogin from "../types";
import Schema from "./schema";
import ErrorHandler from "@/utils/error-handler";
import { useRouter } from "next/navigation";

import { jwtDecode } from "jwt-decode";
import { deleteCookie, getCookie, setCookie } from "cookies-next";
import useAuthStore, { IUser } from "@/stores/auth-store";

const HandleLogin = async (onAuthSuccess: (user: IUser | null) => void) => {
  try {
    // 16.8 Dikarenakan response dari login yang sukses adalah cookie, maka bisa mengambil cookie dari browser client dengan menggunakan package bernama  "cookies-next"
    const access_token = getCookie("access_token") || "";

    if (access_token) {
      // 16.10 Ketika didapatkan access_token dari cookie, maka dilakukan decode dengan menggunakan package "jwt-decode"
      const user: IUser = jwtDecode(access_token);
      // 16.9 Sebagai tambahan, code "setCookie("access_token", access_token);" boleh tidak dipasang, karena login sukses, akan mengirimkan dan menyimpan cookies
      // setCookie("access_token", access_token);
      // 16.11 Sebagai tambahan. Untuk mengecek hasil decode, boleh ditambahkan console.log
      console.log(user);
      // 16.12 Apabila login kembali, dan success, maka akan muncul payload dari JWT berupa :
      /* 
        email :
        name :
        role :
        iat :
        exp :
      */
      // 16.13 Pada saat login dan setelah token di decode, dipanggil hooks zustand bernama onAuthSuccess. Kemudian, masuk ke file "auth-store.ts" pada folder "src/stores"
      onAuthSuccess(user);
    }

    return;
  } catch (err) {
    deleteCookie("access_token");
    throw err;
  }
};

export default function LoginForm() {
  // 16.14
  const { onAuthSuccess } = useAuthStore();
  const router = useRouter();

  // 16.3 Value ditangkap oleh function "login"
  const login = async (params: ILogin) => {
    try {
      // 16.4 Axios mengirimkan/menembak value ke localhost API yang pada case ini, port API merupakan Localhost:8080, ke endpoint "/auth/login". Karena merupakan method "post", maka membutuhkan params yang merupakan email & password
      const { data } = await axiosInstance.post("/auth/login", params);

      // 16.5 Sebagai tambahan. Untuk mengecek apa isi dari data, bisa ditambahkan console.log(data), dan klik login
      console.log(data);
      // 16.6 Jika berhasil login, akan muncul object {massage: "success"} pada console di browser

      // 16.7 Setelah login berhasil, kemudian menjalankan function HandleLogin yang melempar "Zustand"
      await HandleLogin(onAuthSuccess);

      Swal.fire({
        icon: "success",
        title: data.message,
        showConfirmButton: false,
        timer: 2000,
      }).then(() => router.push("/"));
    } catch (err) {
      ErrorHandler(err);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Schema}
        // 16.1 Ketika klik submit pada page login, value dari textbox (email & password) akan ditangkap berdasarkan code berikut
        onSubmit={(values) => {
          // 16.2 Value/Object yang telah ditangkap, kemudian dikirim ke function "register"
          login(values);
        }}
      >
        {(props: FormikProps<ILogin>) => {
          const { values, errors, touched, handleChange } = props;
          return (
            <Form>
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
                Login
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
