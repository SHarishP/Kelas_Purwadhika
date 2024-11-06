// Harike_33 Membuuat Authentication & Authorization
// 33.3 Buat endpoint/route/handler baru dengan file bernama "auth.route.ts"
import { Router } from "express";
// 33.9.1 Import function Register
import { Register, Login } from "../controllers/auth.controller";

const router = Router();

// 33.9.2 Memasukkan function Register
router.post("/register", Register);

// 33.19 Masukkan functin login
router.post("/login", Login);

// 33.10 export dan masukkan router kedalam "server.ts"
export default router;

// 33.4 Buat handler baru pada file "auth.controller.ts"

/* 
    Register dan Login membutuhkan input user seperti email & password saat mengirimkan request. Sehingga input user tersbeut (ex: email & password) masuk ke dalam request.body maka dari itu digunakan method "post".
*/
