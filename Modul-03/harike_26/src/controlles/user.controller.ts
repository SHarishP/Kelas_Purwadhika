// 3.1 Handling untuk router.get("/user-management/users");
// 3.1.1 Lakukan import
import { Request, Response, NextFunction } from "express";

// 3.1.2 Buat function sebagai handler
function GetAllUser(req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).send({
      message: "Get users success",
    });
  } catch (err) {
    next(err);
  }
}

// 4.1 Handling untuk router Get Detail User
// 4.1.1 Buat function
function GetUserDetail(req: Request, res: Response, next: NextFunction) {
  try {
    const { uuid } = req.params;

    // Mencoba masuk ke error.middleware
    if (uuid === "5") {
      throw new Error("ID Tidak boleh 5");
    }

    res.status(200).send({
      message: "Get users success",
      data: uuid,
    });
  } catch (err) {
    next(err);
  }
}

// 3.1.3 Lakukan Export
// 4.1.2 Lakukan Export
export { GetAllUser, GetUserDetail };

// 3.2. Kembali lagi ke user.route.ts untuk melakukan import
