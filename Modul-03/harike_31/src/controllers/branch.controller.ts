// 1. Import express
import { Request, Response, NextFunction } from "express";

// 2. Import PrsimaClient
import { PrismaClient } from "@prisma/client";

// 3. Inisiasi PrismaClient dalam variabel
const prisma = new PrismaClient();

// 4. Buat function untuk membuat Branch
async function CreateBranch(req: Request, res: Response, next: NextFunction) {
  try {
    // 4.1.a Insert data melalui prisma
    // const data = await prisma.branch.create({
    //   data: {
    //     name: "BSD",
    //     location: "Tangerang",
    //   },
    // });

    // 4.2.b Insert data jika kita ingin menggunakan parsing Body
    const { name, location } = req.body;
    const data = await prisma.branch.create({
      data: {
        name,
        location,
      },
    });

    // 4.3. Jika succes, kirim status ke developer
    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

// 5. Membuat function untuk mendapatkan semua branches
async function GetBranches(req: Request, res: Response, next: NextFunction) {
  try {
    // 5.1 findMany digunakan untuk mengambil semua data dari table branch
    const data = await prisma.branch.findMany();
    res.status(200).send({
      message: "Success",
      data,
    });
  } catch (err) {
    next(err);
  }
}

// 6. Mengambil data berdasarkan id
async function GetBranchById(req: Request, res: Response, next: NextFunction) {
  try {
    // 6.1 findUnique digunakan untuk mengambil data dari kategori tertentu
    const { id } = req.params;
    const data = await prisma.branch.findUnique({
      where: {
        id: parseInt(id),
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

// 4.4. export
// 5.2 export
export { CreateBranch, GetBranches, GetBranchById };
