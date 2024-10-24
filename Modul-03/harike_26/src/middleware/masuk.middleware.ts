// 1. Import
import { Request, Response, NextFunction } from "express";

// 2. Buat Function
function masukMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const { user } = req.query;
    // 4. Kita bisa menambahkan proteksi, bahwa kita tidak bisa masuk ke endpoint jika tidak ada user
    // if (!user) res.status(400).send("Unauthorized");

    // Mencoba membuat masuk ke error middleware
    if (!user) throw new Error("Unauthorized");

    console.log("sudah masuk an melalui middleware", user);

    // 3. Tambahkan next supaya middleware bisa melanjutkan ke router
    next();
  } catch (err) {
    next(err);
  }
}

export default masukMiddleware;

// End. Export, dan import ke dalam file server.ts

/* 
    middleware juga bisa dipasang di route level, cek use.route.ts
*/
