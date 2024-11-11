"use client";
import { useState, useEffect } from "react";
import ErrorHandler from "@/utils/error-handler";
import axiosInstance from "@/lib/axios";

import { IUser } from "./types";

// 20.1 Apabila kita tidak ingin menggunakan axiosInstance, kita bisa melakukan import axios dan import cookies
import axios from "axios";
import { getCookie } from "cookies-next";

export default function AdminView() {
  const [users, setUsers] = useState<IUser[]>([]);
  // const getUsers = async () => {
  //   try {
  //     const { data } = await axiosInstance.get("/auth/users");

  //     setUsers(data.data);
  //   } catch (err) {
  //     ErrorHandler(err);
  //   }
  // };

  // 20.2 Dapatkan token dari cookies
  const token = getCookie("access_token");
  // 20.3 Buat function untuk get Authorization Bearer
  const getUsers = async () => {
    try {
      // // 20.4 Kirim request GET ke URL berdasarkan env, dan kirimkan header yang terdapat authorization Bearer Token
      // const { data } = await axios.get(
      //   process.env.NEXT_PUBLIC_BASE_API_URL + "/auth/users",
      //   {
      //     headers: {
      //       Authorization: "Bearer " + token,
      //     },
      //   }
      // );
      //  setUsers(data.data);
      // 20.5 Membuat code dengan fungsi yang sama dengan interceptor dan menggunakan axiosInstance pada file "axios.ts"
      if (token) {
        const { data } = await axiosInstance.get("/auth/users", {
          headers: {
            Authorization: "Bearer " + token,
          },
        });
        setUsers(data.data);
      } else {
        const { data } = await axiosInstance.get("/auth/users");
        setUsers(data.data);
      }
    } catch (err) {
      ErrorHandler(err);
    }
  };

  /* 
    Penggunaan axiosInstance adalah supaya kita tidak perlu selalu menambahkan "process.env.NEXT_PUBLIC_BASE_API_URL + "/auth/users"" di setiap request baru yang kita buat
  */

  /*
    Apabila tidak kita kirimkan headers authorizationnya, 
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
    Maka akan muncul "UnAuthorized"
  */
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="mx-auto max-w-lg mt-20 flex flex-col text-center justify-center">
      <p>Admin Page</p>
      <div>
        <table className="border border-black w-full">
          <thead>
            <tr className="border border-black">
              <th className="p-2">No</th>
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          {users?.length > 0 &&
            users.map((user, idx) => (
              <tbody key={idx}>
                <tr>
                  <td className="p-2">{idx + 1}</td>
                  <td className="p-2">{user.email}</td>
                  <td className="p-2">{user.name}</td>
                  <td className="p-2">{user.role.name}</td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>
    </div>
  );
}
