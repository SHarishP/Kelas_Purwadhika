import axios from "axios";
import { getCookie } from "cookies-next";

// 19.6 Function "axiosInstannce" dibawah bertujuan untuk mempermudah pemanggilan API dengan konfigurasi yang telah diatur sebelumnya, terutama jika API membutuhkan autentikasi berbasis token (JWT).
const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_API_URL || "http://localhost:8000",
  // Penggunaan "withCredentials" mengizinkan request ini membawa cookie, cocok untuk API yang membutuhkan autentikasi atau data session.
  withCredentials: true,
});

// 19.7 Interceptor berefungsi untuk mencegat request sebelum mencapai endpoint. Lebih lengkapnya, cek catatan dibawah tentang maksud dari code berikut. Next, kembali ke file "index.ts" di dalam folder "web/src/views/pages/dashboard"
axiosInstance.interceptors.request.use(
  async (config) => {
    const token = getCookie("access_token");
    if (token) {
      config.headers.Authorization = "Bearer " + token;
    }

    return config;
  },
  async (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;

/* 
Pada axios, interceptors adalah fungsi "penyela" yang memungkinkan kita untuk menangkap, memodifikasi, atau menambahkan logika tambahan ke dalam proses request (permintaan) atau response (balasan) sebelum diteruskan ke server atau aplikasi.

Dengan kata lain, interceptors memungkinkan kita untuk menjalankan kode tambahan setiap kali ada request atau response yang melalui instance axios tersebut. Ini sangat berguna untuk hal-hal seperti:

1.  Menambahkan Header Otomatis (Misalnya, Token Autentikasi):
    Dalam contoh di atas, interceptor request digunakan untuk menambahkan header Authorization ke setiap request, jika token ditemukan di cookie. Ini menghemat waktu karena kita tidak perlu menambahkan header secara manual setiap kali membuat permintaan.

2.  Menangani Error Secara Global:
    Interceptor bisa digunakan untuk menangkap error di semua request/response dan menjalankan logika tertentu. Contohnya, jika ada error 401 (Unauthorized), interceptor bisa secara otomatis melakukan refresh token atau mengarahkan pengguna untuk login.

3.  Memodifikasi Data Request atau Response:
    Interceptor memungkinkan kita memodifikasi data yang dikirim ke server atau yang diterima dari server sebelum data tersebut diproses lebih lanjut.

Pada contoh axiosInstance.interceptors.request.use di atas:
- Request Interceptor (request.use): Berfungsi untuk menangkap setiap request sebelum dikirim ke server.
    - config adalah konfigurasi request yang akan dikirim.
    - Fungsi async (config) => { ... } digunakan untuk menambahkan token di header Authorization jika token ditemukan di cookie.
    - Setelah memodifikasi config, interceptor mengembalikannya sehingga request bisa diteruskan.
Jika error terjadi selama proses penambahan token ini, interceptor menangkapnya di bagian error, yang kemudian direject dengan Promise.reject(error) untuk ditangani di tempat lain.

Ilustrasi Sederhana
Bayangkan interceptor seperti filter di mesin kasir:

Request interceptor: Memeriksa dan mempersiapkan barang (request) yang akan dibeli (dikirim).
Response interceptor: Memproses dan memodifikasi struk (response) yang diterima pelanggan.
Interceptors pada axios ini membuat alur komunikasi antara aplikasi dan server lebih terstruktur dan efisien.
*/
