/* 
  Di file ini kita tidak akan menggunakan GET, POST, dan method lainnya, melainkan menggunakan Router
*/
// 1. Import express
import express, { Application } from "express";

// 2. Import PORT
import { PORT as port } from "./config";

// 5. import user.route dan beri nama "useRoute" secara manual
import userRoute from "./routes/user.route";

// 8. Setelah membuat route level middleware, import middleware
import masukMiddleware from "./middleware/masuk.middleware";
import errorMiddleware from "./middleware/error.middleware";

// 3. Simpan kedalam variabel PORT
const PORT = Number(port) || 8000;

// 4. Menyimpan Express Aplication kedalam variabel app
const app: Application = express();
/* 
    express() digunakan untuk membuat server, dimana server tsb bisa mendengarkan semua request yang masuk ke server
    express() sama seperti http.createServer()
*/

// 6. Define middleware
app.use(express.json());
/* 
  Ini adalah application level middleware
*/
// 9. Define route level middleware
// app.use(masukMiddleware);

// 7. Define Route
app.use("/user-management", userRoute);
/* 
  Maksud dari penggunaan app.use disini adalah bahwa tidak peduli Methodnya, yang penting terdapat /user-management di
  URI, langsung masuk ke userRoute  

  Cara pembacaar user Route adalah
  app.use("/user-management/user/:uuid", GetUserDetail); maupun
  app.use("/user-management/user", GetAllUser);

*/

// 10. Menambahkan error handling middleware, penempatan ada di bawah sebelum app.listen.
app.use(errorMiddleware);
/* 
  Error handling ada dibawah karena, apabila di route masuk error, dan catch(err), maka akan langsung di next(), dan masuk ke middleware
  ini 
*/

// END. Membuat server selalu mendengarkan request
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
