"use client";
// import { useState, useEffect } from "react";
// import ErrorHandler from "@/utils/error-handler";
// import axiosInstance from "@/lib/axios";

// 19.9 Sebagai tambahan. Sehubungan dengan kita sudah punya token yang disimpan di dalam zustand, dimana token tersebut berisikan "name", "email", dan "role", kita bisa langsung menggunakannya dari zustand. Dengan melakukan import user dari zustand
import useAuthStore from "@/stores/auth-store";

// import { IUser } from "./types";

export default function DashboardView() {
  // const [user, setUser] = useState<IUser | null>(null);

  // const getUser = async () => {
  //   try {
  //     // 19.4 Ketika masuk ke "dashboard", dilakukan fetching ke API ke endpoint berikut. Kemudian lihat auth.route.ts di api
  //     const { data } = await axiosInstance.get("/auth/me");
  //     // 19.8 Setelah mendapatkan data user login dari "auth/me" maka memasukkan data tersebut ke state user dengan Hooks "setUser"
  //     setUser(data.data);
  //   } catch (err) {
  //     ErrorHandler(err);
  //   }
  // };
  // useEffect(() => {
  //   getUser();
  // }, []);

  // 19.10 Sebagai Tambahan. Sehubungan dengan kita menggunakan useAuthStore, maka kita tidak memerlukan useEffect dan useState lagi. Dan dapat menuliskan code seperti berikut
  const { user } = useAuthStore();
  // 19.11 Pengambilan user ini dapat dilakukan tanpa fetching data ke API karena kita sudah melakukan penyimpanan di zustand. Sehingga dapat menghemat request ke API
  return (
    <div className="mx-auto max-w-lg mt-20 flex flex-col text-center justify-center">
      <p>Admin Page</p>
      <div>
        <table className="border border-black w-full">
          <thead>
            <tr className="border border-black">
              <th className="p-2">Email</th>
              <th className="p-2">Name</th>
              <th className="p-2">Role</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="p-2">{user?.email}</td>
              <td className="p-2">{user?.name}</td>
              <td className="p-2">{user?.role}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
