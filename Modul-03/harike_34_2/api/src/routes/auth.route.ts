import { Router, Request, Response, NextFunction } from "express";
import {
  Login,
  Register,
  GetUserLogin,
  GetUsers,
  UpdateAvatar,
} from "../controllers/auth.controller";
import { VerifyToken, AdminGuard } from "../middlewares/auth.middleware";

// 21.12 Import RegisterValidation
// 23.7 Import LoginValidation
import {
  RegisterValidation,
  LoginValidation,
} from "../middlewares/validations/auth.validation";

// 25.16 Import SingleUploader
import { SingleUploader } from "../utils/uploader";

const router = Router();

// 21.13 Pasang RegisterValidation di route Register
router.post("/register", RegisterValidation, Register);

// 23.7 Pasang LoginValidation di route Login
router.post("/login", LoginValidation, Login);

// Endpoint yang digunakan untuk mengetahui siapa yang login. Dibutuhkan login
// 19.5 Dari front end yang memfetching data ke API dengan End Point "/auth/me", diketahui bahwa untuk melanjutkan dibutuhkan "VerifyToken" atau dibutuhkan token yang didapatkan setelah login atau "Authorization: Bearer". Setelah di dapatkan token, kemudian lanjut buka file "axios.ts" yang berada di dalam folder "web/src/lib"
router.get("/me", VerifyToken, GetUserLogin);

// Endpoint yang digunakan untuk mengetahui seluruh data user yang telah register. Dibutuhkan login, dan role harus admin.
router.get("/users", VerifyToken, AdminGuard, GetUsers);

// 25.15 Membuat route uploader file menggunakan multer
router.post(
  "/upload",
  SingleUploader("AVT", "/avatar"),
  // 25.16 Buat controller untuk route upload
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // 25.17 Ambil file dari request dan memasukkan ke file oleh multer
      const { file } = req;
      // 25.18 Ambil data dari body dan disimpan ke name oleh multer
      const { name } = req.body;

      // Mengecek file dan name
      console.log(file);

      // 25.19 Berikan proteksi jika tidak ada file yang diupload
      if (!file) throw new Error("no file uploaded");

      // 25.20 Jika berhasil, beri pesan "file uploaded"
      res.status(200).send("file uploaded");
    } catch (err) {
      next(err);
    }
  }
);

// 26.10 Buat route baru /avatar
router.post(
  "/avatar",
  VerifyToken,
  SingleUploader("AVT", "/avatar"),
  UpdateAvatar
);

export default router;

/* 
  Controller pada route upload, bisa dipisah
  req: Request, res:Response, next: NextFunction) => {
  .....
  });
*/
