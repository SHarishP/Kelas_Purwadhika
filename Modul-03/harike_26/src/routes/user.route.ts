// 1. Import Router
import { Router } from "express";

// 3.4 Lakukan Import handler GetAllUser
// 4.2 Lakukan Import handler GetUserDetail
import { GetAllUser, GetUserDetail } from "../controlles/user.controller";

// 5.1 Route level middleware
import masukMiddleware from "../middleware/masuk.middleware";

// 2. Inisialisasi dan simpan ke dalam variabel router
const router = Router();
/* 
    Maksud dari inisialisasi ini adalah bahwa kita telah membuat routing yang terisolasi.
    Penggunaan sama seperti di harike_26 "app.get / app.post", tetapi disini menggunakan "router.get, dst"
*/

// 5.3 Kita juga bisa menambahkan middleware hanya untuk user route saja (jika kita punya route yang banyak)
// router.use(masukMiddleware);

// 3. GET All User
// router.get("/user-management/users");
/* 
    Ini adalah endpoint untuk user-management dengan collection user
*/
// 3.1 Buat handling, masuk ke file user.controller.ts

// 3.5 Masukkan GetAllUser kedalam router.get("/users");
router.get("/users", GetAllUser);

// 5.2 Jika kita ingin menambahkan middleware untuk GetAllUser saja, bisa kita tuliskan seperti berikut
// router.get("/users", masukMiddleware ,GetAllUser);

// 4. Get Detail User
// router.get("/users/:uuid");
// 4.1 Buat handling, masuk ke file user.controller.ts

// 4.3 Masukkan handling GetUserDetail
router.get("/users/:uuid", GetUserDetail);

export default router;
