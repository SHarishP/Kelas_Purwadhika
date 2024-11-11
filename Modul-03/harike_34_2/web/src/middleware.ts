import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { jwtDecode } from "jwt-decode";
import { IUser } from "./stores/auth-store";

const protectedRoutes = ["/admin", "/dashboard"];

export default async function middleware(req: NextRequest) {
  try {
    const cookieStore = await cookies();
    const isProtected = protectedRoutes.some((path) =>
      req.nextUrl.pathname.startsWith(path)
    );

    const token = cookieStore.get("access_token")?.value || "";

    if (isProtected && !token) {
      return NextResponse.redirect(new URL("/login", req.nextUrl));
    }

    const user: IUser = jwtDecode(token);

    if (
      isProtected &&
      req.nextUrl.pathname.startsWith("/admin") &&
      user.role != "admin"
    ) {
      return NextResponse.redirect(new URL("/", req.nextUrl));
    }

    return NextResponse.next();
  } catch (err) {
    return NextResponse.redirect(new URL("/", req.nextUrl));
  }
}

export const config = {
  matcher: ["/admin/:path*", "/dashboard/:path*"],
};

/* 
Kode tersebut adalah middleware untuk aplikasi Next.js yang berfungsi sebagai penjaga keamanan untuk rute-rute tertentu, seperti /admin dan /dashboard. Middleware ini memeriksa apakah pengguna memiliki token autentikasi (access_token) dan, jika rute tertentu membutuhkan peran khusus (seperti "admin"), middleware memastikan bahwa pengguna memiliki peran yang tepat sebelum mengizinkan akses ke rute tersebut.

Berikut penjelasan detail:

1.  Import Statements:
    1.1.  NextResponse dan NextRequest dari next/server: Mengimpor objek untuk mengelola response dan request dalam konteks Next.js.
    1.2.  cookies dari next/headers: Digunakan untuk mendapatkan cookie dari request.
    1.3.  jwtDecode: Digunakan untuk mendekode token JWT (JSON Web Token) agar informasi pengguna bisa diperoleh dari token tersebut.
    1.4.  IUser dari ./stores/auth-store: Tipe IUser mendefinisikan struktur data pengguna, misalnya berisi role pengguna.

2.  Daftar Rute yang Dilindungi:
    protectedRoutes: Array berisi rute yang hanya dapat diakses oleh pengguna tertentu, yaitu /admin dan /dashboard.

3.  Fungsi Middleware Utama:
    middleware(req: NextRequest): Fungsi middleware ini berjalan setiap kali request dikirim ke salah satu rute yang sesuai dengan konfigurasi matcher di bawah.

Dalam fungsi ini:
  a.  Mengambil Cookie: cookieStore.get("access_token") mendapatkan token autentikasi (access_token) dari cookie.
  b.  Cek Rute Dilindungi: isProtected memeriksa apakah req.nextUrl.pathname cocok dengan salah satu rute yang ada di protectedRoutes.
  c.  Redirect jika Tidak Ada Token: Jika rute dilindungi (isProtected) dan token tidak ada (!token), pengguna akan diarahkan ke halaman login (/login).
  d.  Dekode Token JWT: jwtDecode(token) mendekode token untuk mendapatkan informasi pengguna (user).
  e.  Cek Akses Admin:
      e.1.  Jika pengguna mencoba mengakses /admin dan peran mereka bukan "admin" (user.role != "admin"), mereka akan diarahkan ke halaman utama (/).
  f.  Izinkan Lanjut ke Rute: Jika tidak ada masalah pada pemeriksaan di atas, NextResponse.next() mengizinkan request untuk diteruskan ke rute tujuan.

4.  Handling Error:
    Jika terjadi error selama proses di atas (misalnya, token tidak valid), middleware akan mengarahkan pengguna kembali ke halaman utama (/).

5.  Konfigurasi Matcher:
    matcher: Menentukan rute-rute mana yang akan diterapkan middleware ini. Dengan pola ini, setiap permintaan ke /admin/* dan /dashboard/* akan melalui pemeriksaan middleware.

 Inti dari kode ini
Middleware ini memastikan bahwa:
1.  Hanya pengguna yang memiliki token autentikasi dapat mengakses rute tertentu.
2.  Rute /admin hanya bisa diakses oleh pengguna dengan peran "admin".
3.  Jika pengguna tidak memenuhi kriteria ini, mereka akan diarahkan ke halaman login atau halaman utama.
*/

/* 
PENJELASAN METHOD SOME
Method .some() adalah method bawaan dari JavaScript yang ada pada array, bukan bagian dari Next.js. Method ini memeriksa apakah setidaknya satu elemen dalam array memenuhi kondisi tertentu yang diberikan oleh callback function.
const isProtected = protectedRoutes.some((path) =>
    req.nextUrl.pathname.startsWith(path)
);
Penjelasan .some()
1.  Deskripsi Fungsi .some():
    1.1.  .some() akan mengembalikan true jika setidaknya satu elemen dalam array protectedRoutes memenuhi kondisi yang diberikan di dalam callback function.
    1.2.  Jika tidak ada elemen yang memenuhi kondisi tersebut, maka .some() akan mengembalikan false.

2.  Penerapan dalam Kode:
    2.1.  protectedRoutes adalah array yang berisi rute yang dilindungi: ["/admin", "/dashboard"].
    2.2.  req.nextUrl.pathname.startsWith(path): Callback ini mengecek apakah req.nextUrl.pathname (path dari URL yang diminta) dimulai dengan salah satu elemen dalam protectedRoutes.
    2.3.  Jika setidaknya satu path dari protectedRoutes adalah prefix dari req.nextUrl.pathname, maka isProtected akan bernilai true.

3.  Contoh: Misalkan req.nextUrl.pathname bernilai "/admin/settings", maka .some() akan mengecek:
    3.1. Apakah "/admin/settings" dimulai dengan "/admin"? (Ini bernilai true)
    3.2.  Karena true ditemukan, maka isProtected akan bernilai true, dan pengecekan rute dilindungi akan aktif.

Mengapa .some() Digunakan?
  A.  .some() berguna di sini karena hanya perlu memeriksa apakah salah satu elemen dalam protectedRoutes cocok. Dengan cara ini, kita tidak perlu melakukan pengecekan manual satu per satu, yang lebih efisien dan lebih ringkas.
  B.  Jadi, .some() adalah method bawaan JavaScript untuk array dan sering digunakan dalam kasus seperti ini untuk mencari kecocokan dengan mudah.
*/
