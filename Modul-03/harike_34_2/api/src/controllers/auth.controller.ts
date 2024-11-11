import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { genSalt, hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";

import { SECRET_KEY } from "../utils/envConfig";
import { User } from "../custom";

const prisma = new PrismaClient();

async function Register(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password, name } = req.body;

    const findUser = await prisma.user.findUnique({
      where: { email },
    });

    if (findUser) throw new Error("Email Sudah ada");

    // 17.2 Mencari user dari table role
    const findRoleUser = await prisma.role.findUnique({
      where: { name: "user" },
    });
    if (!findRoleUser) throw new Error("Role tidak ada");

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);

    // 11.4 Karena kita sudah tidak mengembalikan nilai apapun (Cek 10.3), maka kita tidak perlu menyimpan ke variabel newUser
    // const newUser = await prisma.user.create({
    await prisma.user.create({
      data: {
        email,
        name,
        password: hashPassword,
        // 17.1 Penggunaan "roleId: 1," kurang bagus, karena apabila berbeda user maka database juga berbeda. Sebagai contoh user pertama memiliki id 1 yang merupakan "user", sedangkan user kedua memiliki id 1 yang merupakan "admin".
        // 17.3 Ubah roleId
        roleId: findRoleUser.id,
      },
    });

    res.status(200).send({
      message: "Register success",
      // 10.3 Kita tidak boleh mengirim passowrd kembali, maka dari itu "data: newUser," dihapus
      // data: newUser,
    });
  } catch (err) {
    next(err);
  }
}

async function Login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;

    const findUser = await prisma.user.findUnique({
      where: { email },
      // Penggunaan "include" sama dengan join table. Sehingga dapat mengembalikkan value "role" pada saat login
      include: {
        role: true,
      },
    });

    if (!findUser) throw new Error("Invalid Email");

    const isValid = await compare(password, findUser.password);

    if (!isValid) throw new Error("Invalid password");

    // "payload" merupakan sebuah object yang berisi data-data user yang merupakan isi dari token yang nantinya akan dikirmkan berulang-ulang dari server ke client dan dari client ke server tanpa perlu melakukan fetching ulang.
    const payload = {
      email,
      name: findUser.name,
      role: findUser.role.name,
    };

    // "sign" merupakan method JWT
    // Terdapat berbagai macam cara dalam menggunakan token seperti access_token dan refresh_token. Penggunaan access_token dan refresh_token relatif sama, perbedaan ada di expiresIn nya saja. Dimana refresh_token memiliki expiresIn yang lebih lama dari access_token.
    const token = sign(payload, SECRET_KEY as string, { expiresIn: "1hr" });

    // Method "cookie" digunakan untuk menyimpan access_token. Apabila user ingin mengambil email, name, dan role dari user, user cukup mengambil data dari cookie dan didecode. Sehingga tidak perlu mengirimkan data2 tsb ke body lagi.
    res.status(200).cookie("access_token", token).send({
      message: "success",
      // Jika kita ingin menggunakan local storage dan bukan cookies, kita bisa menambahkan
      // data: token,
    });
  } catch (err) {
    next(err);
  }
}

// Sebagai Catatan Pengingat ketika kita ingin mengambil data dari API menggunakan Axios:
/* 
  const {data} = await axios.get("url");
  // Jika kita ingin mengambil access_token, maka:
  data.access_token;
  // Jika kita ingin mengambil message, maka :
  data.message

  data disini merupakan response.body
*/

async function GetUserLogin(req: Request, res: Response, next: NextFunction) {
  try {
    const { email } = req.user as User;

    const data = await prisma.user.findUnique({
      where: { email },
      select: {
        email: true,
        name: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

async function GetUsers(req: Request, res: Response, next: NextFunction) {
  try {
    const data = await prisma.user.findMany({
      select: {
        email: true,
        name: true,
        role: {
          select: {
            name: true,
          },
        },
      },
    });

    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

// 26.3 Membuat handler UpdateAvatar untuk mengupdate picture Avatar pada API
async function UpdateAvatar(req: Request, res: Response, next: NextFunction) {
  try {
    // 26.4 Ambil email, karena untuk bisa update avatar dibutuhkan login terlebih dahulu
    const { email } = req.user as User;
    // 26.5 Ambiil file dari request
    const { file } = req;

    // 26.6 Jika tidak ada file yang dikirimkan oleh request, kirimkan error
    if (!file) {
      throw new Error("No file uploaded");
    }

    // 26.7 Melakukan update data ke database menggunakan prisma
    await prisma.user.update({
      where: {
        email,
      },
      data: {
        avatar: file?.filename,
      },
    });

    // 26.8 Kirim status response jika sukses
    res.status(200).send({
      message: "Success",
    });
  } catch (err) {
    next(err);
  }
}

// 26.9 Export UpdateAvatar, kemudian masuk ke auth.route.ts
export { Register, Login, GetUserLogin, GetUsers, UpdateAvatar };
