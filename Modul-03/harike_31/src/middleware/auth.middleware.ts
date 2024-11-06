// 33.31 Import User dari custom.d.ts
import { User } from "../custom";
// 33.32 Import dari express
import { Request, Response, NextFunction } from "express";
// 33.36 Import Secret Key untuk memverify token yang telah di authentifikasi sekaligus mendecode
import { SECRET_KEY } from "../config/env.config";
// 33.37 Import verify
import { verify } from "jsonwebtoken";

// 33.33 Buat function VerifiyToken yang berfungsi untuk mengecek authorization header. Jika tidak ada authorization header, maka tidak lolos authorization. VerifyToken digunakan untuk semua resource yang membutuhkan login
async function VerifyToken(req: Request, res: Response, next: NextFunction) {
  try {
    // 33.34 Code untuk mengambil header. Header ini bisa berisi access_token
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // 33.35 Jika tidak ada token, munculkan error
    if (!token) throw new Error("Unauthorized");

    // 33.38 Code untuk verify token
    const user = verify(token, SECRET_KEY as string);

    // 33.39 Jika Secret key tidak sama, maka munculkan error
    if (!user) throw new Error("Unathorized");

    // 33.40 Jika Secret Key sama, lanjutkan ke source
    req.user = user as User;
    next();
    console.log(user);
  } catch (err) {
    next(err);
  }
}

// 33.43 Membuat middleware untuk mengecek apakan user merupakan admin
async function AdminGuard(req: Request, res: Response, next: NextFunction) {
  try {
    if (req.user?.role !== "admin") throw new Error("Unauthorized");
    next();
  } catch (err) {
    next(err);
  }
}

// 33.41 Export dan pasang di branch di branch.route.ts
// 33.44 Expord dan pasang di branch
export { VerifyToken, AdminGuard };
