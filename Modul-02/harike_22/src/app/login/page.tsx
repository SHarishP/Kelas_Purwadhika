/* 
    page.tsx akan otomatis langsung dibaca oleh Next.JS, tetapi dalam 1 folder, maksimal hanya ada 1 page.tsx dan 1 layout.tsx
    Dan kita tidak mennggunakan index.tsx lagi
*/
// import Link from "next/link"; // Ini digunakna supaya kita bisa nge routing ke home

/* export default function Login() {
  return (
    <div>
      <Link href="/">Home</Link>
      <h1 className="text-lg">Login Page</h1>
    </div>
  );
} */

/* 
    Kita juga bisa membuat komponen login padda src/views/pages/login, dan memanggilnya di page.tsx ini
*/

import LoginView from "@/views/pages/login";

export default function Login() {
  return <LoginView />;
}
