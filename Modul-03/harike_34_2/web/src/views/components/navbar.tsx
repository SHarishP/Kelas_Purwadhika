"use client";
import useAuthStore from "@/stores/auth-store";
import { useRouter } from "next/navigation";

export default function Navbar() {
  // 16.18 Object user kemudian dipasangkan di navbar dengan memanggil useAuthStore()
  const { user, clearAuth } = useAuthStore();
  const router = useRouter();

  return (
    <div className="flex flex-row justify-around items-center p-2 bg-gray-300">
      <div>
        <button onClick={() => router.push("/")}>LOGO</button>
      </div>
      <div>
        <div className="flex gap-4">
          <button onClick={() => router.push("/dashboard")}>Dashboard</button>
          <button onClick={() => router.push("/admin")}>Admin</button>
        </div>
      </div>
      {/* 16.19 Kemudian di cek, apakah user mempunyai value dan tidak null. Jika tidak Null, maka munculkan komponen berikut */}
      {user ? (
        <div className="flex gap-4 items-center">
          {/* 16.20 Jika user ada, maka munculkan name dari object user */}
          <p>Welcome, {user.name}</p>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
            onClick={() => {
              clearAuth();
              router.push("/");
            }}
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
            onClick={() => router.push("/register")}
          >
            Register
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
            type="submit"
            onClick={() => router.push("/login")}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
}
