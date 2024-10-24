// 1. Import express
import express, { Request, Response, Application } from "express";

// 2. import Port
import { PORT as port, MOCK_API_URL } from "./config";

// MockAPI-1. import Axios
import axios from "axios";

// 3. Menyimpan Port
const PORT = Number(port) || 8000;

// 4. Menyimpan Express Aplication kedalam variabel app
const app: Application = express();
/* 
    express() digunakan untuk membuat server, dimana server tsb bisa mendengarkan semua request yang masuk ke server
    express() sama seperti http.createServer()
*/

// 5.5 Middleware untuk memparsing body, supaya dapat mengambil request.body dari sebuah request
// Ditulis lebih dulu sebelum membuat request
app.use(express.json());

// 5.1 Membuat request GET dengan endpoint "/api",
app.get("/api", (req: Request, res: Response) => {
  res.status(200).send("This is express /api GET Method");
});

// 5.2 Membuat request GET dengan endpoint berbeda
app.get("/users-management", (req: Request, res: Response) => {
  res.status(200).send("This is express /users GET");
});

// 5.3 Membuat request PATCH
app.patch("/api", (req: Request, res: Response) => {
  res.status(200).send("This is express /api PATCH Method");
});

// 5.4 Membuat request POST
app.post("/api/:id", (req: Request, res: Response) => {
  res.status(200).send("This is express /api POST Method");
});

/* 
    Endpoint boleh sama asalahkan methodnya berbeda
*/

// Contoh endpoint sesuai aturan
// Resource User
// Untuk mendapatkan semua data users
app.get("/api/users", async (req: Request, res: Response) => {
  // MockAPI-2. Gunakan axios
  const { data } = await axios.get(`${MOCK_API_URL}/users`);

  res.status(200).send({
    message: "Ini List Users",

    // MockAPI-3. Send data dari MockAPI
    data,
  });
});
// Untuk mendapatkan satu data user
app.get("/api/users/:id", async (req: Request, res: Response) => {
  // MockAPI-2. Gunakan axios
  const { id } = req.params;
  const { data } = await axios.get(`${MOCK_API_URL}/users/${id}`);

  res.status(200).send({
    message: "Ini List Data 1 User",
    data,
  });
});
/* 
:/id tidak akan dimunculkan di url, melainkan berlaku seperti slug
*/

// Untuk memasukkan data user baru
app.post("/api/users", (req: Request, res: Response) => {
  res.status(200).send({
    message: "Ini Create Data User",
  });
});

// Untuk melakukan patch -> mengedit data user
app.patch("/api/users/:id", (req: Request, res: Response) => {
  // 5.8 Mengambil data user setelah parsing menggunakan middleware
  const { id } = req.params;
  res.status(200).send({
    message: "Ini Edit Data User",
    data: id,
  });
  /* 
    Pastikan pada const mempunyai endpoint yang sama, jika endpoint :id maka const {id}, jika endpoint :uuid maka const {uuid}
  */
});

// 6. Membuat server selalu mendengarkan request
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
