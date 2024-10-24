import http, { IncomingMessage, ServerResponse } from "http";
/* 
    1. "http" digunakan untuk membuat http server, bawaan dari nodeJS.
        {IncomingMessage, ServerResponse} digunakan untuk typescript
*/

import { PORT as port } from "./config";
/* 
    2.  import PORT dari config untuk bisa membaca .env dari config
*/

const PORT = Number(port) || 8000; // 3. Untuk menyimpan PORT, jika PORT kosong, maka nilai default 8000
// Ubah port menjadi Number(port) digunakan untuk mengkonversi string ke number, karena tipe data PORT secara default adalah string

// 4. Membuat Server
const server = http.createServer(
  async (req: IncomingMessage, res: ServerResponse) => {
    // Kita bisa mengambil request dan mengirimkan respond sama seperti di front end, dengan conditional berikut
    if (req.url === "/api" && req.method === "GET") {
      // setiap request memiliki method
      //   req.url ==== "/api" disebut dengan endpoint

      res.writeHead(200, { "Content-Type": "Application/json" });
      // 200: respond berhasil. "Content-Type" merupakan data apa yang akan kita kirimkan
      res.write("This is /api with GET method");

      res.end();
    }
    // Contoh endpoint yang lain
    if (req.url === "/users" && req.method === "GET") {
      res.writeHead(200, { "Content-Type": "Application/json" });
      res.write("This is /users with GET method");
      res.end();
    }
  }
);

// 5. Membuat server selalu mendengarkan request
server.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
/* 
    Maksud dari code diatas adalah membuat server selalu mendengarkan request yang datang ke PORT (untuk case ini PORT 8080 / 8000).
    Callback functiion digunakan untuk memberi tahu apakah server sudah menyala atau belum dengan memunculkan console.log 
*/

/* 
http.createServer() akan membuat API yang parameternya adalah asynchronous callback.
Dalam membuat API ada terdapat request (req) dan respond (res)
*/

/* 
    Ketika server sudah menyala, server akan selalu aktif untuk mendengarkan request masuk (server tidak mati). Jika ada request
    masuk akan ditangkap oleh server. Dan tidak seperti function javascript yang hanya dijalankan sekali
*/
