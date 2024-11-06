// Harike_33 Membuuat Authentication & Authorization
// 33.4 Membuat handler
import { Request, Response, NextFunction } from "express";
// 33.6 Import function PrismaClient
import { PrismaClient } from "@prisma/client";

// Penggunaan Bycript
// 33.11. Setelah install package bycript, import gensalt, dan hash
// 33.17. Import compare dari bcrypt. Method ini akan mengambil salt dari db. Dan salt dipasang ke password yang dikirimkan
import { compare, genSalt, hash } from "bcrypt";

// 33.23 Import sign dari JSONWebToken dan secretkey, berfungsi untuk membuat token yang sudah terauthentifikasi dengan secret_key beserta payload, dan optonal config lainnya
import { sign } from "jsonwebtoken";

// 33.25 Import Secret Key
import { SECRET_KEY } from "../config/env.config";

// 33.6.1 Jalankan function PrismaClient didalam variabel prisma
const prisma = new PrismaClient();

// 33.5 Membuat function register dengan proteksi dimana email tidak boleh sama
async function Register(req: Request, res: Response, next: NextFunction) {
  try {
    // 33.7 Mengecek apakah email sudah terdaftar atau belum
    const { email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: { email },
    });
    if (findUser) throw new Error("Email Sudah ada");

    // 33.12 Generate random string dengan menggunakan genSalt
    const salt = await genSalt(10);
    console.log(salt);
    // 33.13 Hash Password dan ditambahkan random string dari salt
    const hashPassword = await hash(password, salt);

    // 33.8 Apabila email yang dikirim belum terdaftar pada table User
    const newUser = await prisma.user.create({
      data: {
        email,
        // 33.14 Ubah password yang awalnya hanya "password" saja, menjadi "password: hashPassword" supaya dapat POST password dari hashPasword, dan bukan dari body lagi.
        password: hashPassword,
      },
    });

    res.status(200).send({
      message: "success",
      // Kita mengembalikan data hanya untuk mengecek saja, nextnya kita tidak boleh mengembalikan data password
      data: newUser,
    });
  } catch (err) {
    next(err);
  }
}

// 33.15 Membuat function Login
async function Login(req: Request, res: Response, next: NextFunction) {
  try {
    // 33.16 Mengecek apakah email ada atau tidak
    const { email, password } = req.body;
    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    // 33.16.1. Jika email tidak ada di database, munculkan error
    if (!findUser) throw new Error("Invalid Email");

    // 33.17. Mengecek apakah password ada di dalam databse atau tidak
    const isValid = await compare(password, findUser.password);

    // 33.18. Jika password tidak sama, munculkan error
    if (!isValid) throw new Error("Invalid Password");

    // 33.24 Membuat Payload yang nantinya dikirimkan menggunkan JSONWebToken
    const payload = {
      email,
      role: findUser.role,
    };

    // 33.26 Membuat token yang dikirimkan dengan JSONWebToken
    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1d" });

    res.status(200).send({
      message: "success",
      //   data: findUser,
      //   33.27  Tambahkan token untuk dikembalikan ke client
      access_token: token,
    });
  } catch (err) {
    next(err);
  }
}

export { Register, Login };

// 33.9 Masukkan function Register ke routers di dalam file "auth.route.ts"

/* 
    Note :
    GenSalt pada bcrypt berfungsi untuk menghasilkan "salt" atau nilai acak yang ditambahkan ke password sebelum di-hash. Salt ini berfungsi untuk meningkatkan keamanan hasil hash, sehingga meskipun dua password pengguna sama, hash yang dihasilkan akan berbeda karena salt yang berbeda pula.

    Sign pada JSONWebToken berfungsi untuk ....
*/
