// 21.3 Import Reqeust, Response, dan NextFunction dari express
import { Request, Response, NextFunction } from "express";

// 21.4 Import body dan validationResult dari express-validator
import { body, validationResult } from "express-validator";
// Fungsi dari "validationResult" adalah untuk menangkap "result", apakah terdapat masalah atau tidak.
// Funsgi dari "body" adalah supaya validasi dapat mengambil data dari request.body. Dikarenakan kita melakukan passing request. Cek 21.9

// 21.5 Sistem penggunaan "express-validator" adalah sebuah array berisi skema dari validation dan middleware kita. Buat validation untuk register:
export const RegisterValidation = [
  // Penggunaan validasi sama seperti Package YUP, dimana bisa melakukan chaining
  // 21.6 Validasi untuk email
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  // 21.7 Validasi untuk nama
  body("name")
    .notEmpty()
    .withMessage("Name is required")
    .isLength({ min: 3 })
    .withMessage("Name must be 3 charachters minimum"),

  // 21.8 Validasi untuk password
  body("password")
    .notEmpty()
    .withMessage("Password is required")
    .isLength({ min: 3 })
    .withMessage("Password must be 3 characters minimum")
    .matches(/^(?=.*[\d])(?=.*[!@#$%^&*])[\w!@#$%^&*]{6,16}$/)
    .withMessage(
      "Password need to have atleast 1 number and special characters"
    ),

  // 21.9 Jika selesai membuat validasi, buat handler yang memiliki request, response, dan nextFunction seperti berikut:
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // 21.10 Ambil error dari vallidationResult. Code ini berfungsi jika terdapat error dari validasi pada body(), maka akan ditangkap oleh validationResult. Dimana kita melempar request ke dalam validationResult, sehingga validationResult juga bisa melihat / menangkap body kita
      const errors = validationResult(req);
      // cek isi dari errors
      console.log(errors);
      if (!errors.isEmpty()) throw new Error(errors.array()[0].msg);

      // 21.11 Jika tidak terjadi error, lanjutkan, dan import di auth.route.ts
      next();
    } catch (err) {
      next(err);
    }
  },
];

// 23.1 Membuat validation untuk login
export const LoginValidation = [
  // 23.2 Validasi untuk email
  body("email")
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email format"),

  // 23.3 Validasi untuk password
  body("password").notEmpty().withMessage("Password is required"),

  // 23.4 Buat handler untuk mengatasi error
  (req: Request, res: Response, next: NextFunction) => {
    try {
      // 23.5 Ambil error dari vallidationResult.
      const errors = validationResult(req);
      console.log(errors);
      if (!errors.isEmpty()) throw new Error(errors.array()[0].msg);

      // 23.6 Jika tidak terjadi error, lanjutkan, dan import di auth.route.ts
      next();
    } catch (err) {
      next(err);
    }
  },
];

/* 
    Setelah run, dan muncul error validasi. Contoh console.log(errors) adalah sebagai berikut :
    Result {
    formatter: [Function: formatter],
    errors: [
            {
                type: 'field',
                value: '',
                msg: 'Password is required',
                path: 'password',
                location: 'body'
            },
            {
                type: 'field',
                value: '',
                msg: 'Password must be 3 characters minimum',
                path: 'password',
                location: 'body'
            },
            {
                type: 'field',
                value: '',
                msg: 'Password need to have atleast 1 number and special characters',
                path: 'password',
                location: 'body'
            }
        ]
    }
*/
