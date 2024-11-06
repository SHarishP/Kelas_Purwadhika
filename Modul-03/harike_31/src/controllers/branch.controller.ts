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
    // const { name, location } = req.body;
    // const data = await prisma.branch.create({
    //   data: {
    //     name,
    //     location,
    //   },
    // });

    // 4.2.c Insert data dengan fungsi MySQL Transaction, dan sekaligus input table manager
    const { name, location, managerName } = req.body;

    await prisma.$transaction(async (prisma) => {
      const findBranch = await prisma.branch.findFirst({
        where: {
          name,
        },
      });

      if (findBranch) {
        throw new Error("Branch with that name already exist");
      }

      const branch = await prisma.branch.create({
        data: {
          name,
          location,
        },
      });

      const manager = await prisma.manager.create({
        data: {
          name: managerName,
          branchId: branch.id,
        },
      });

      // 4.3. Jika succes, kirim status ke developer
      res.status(200).send({
        message: "Success",
        data: {
          branch,
          manager,
        },
      });
    });
  } catch (err) {
    next(err);
  }
}

// 5. Membuat function untuk mendapatkan semua branches
// async function GetBranches(req: Request, res: Response, next: NextFunction) {
//   try {
//     interface IFilter {
//       name?: string;
//     }
//     const { name } = req.query;
//     const filter: IFilter = {};
//     if (name) {
//       filter.name = name as string;
//     }

//     // 5.1 findMany digunakan untuk mengambil semua data dari table branch
//     const data = await prisma.branch.findMany({
//       where: {
//         name: filter.name,
//       },
//     });
//     res.status(200).send({
//       message: "Success",
//       data,
//     });
//   } catch (err) {
//     next(err);
//   }
// }

// 6. Mengambil data berdasarkan id
async function GetBranchById(req: Request, res: Response, next: NextFunction) {
  try {
    // 6.1 findUnique digunakan untuk mengambil data dari kategori tertentu
    const { id } = req.params;
    const data = await prisma.branch.findUnique({
      where: {
        id: parseInt(id),
      },
      // Menambahkan include table manager
      include: {
        manager: true,
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

// 7. Menghupdate branch berdasarkan ID
async function UpdateBranchById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    // 7.1 update digunakan untuk mengupdate data di MySQL
    const { id } = req.params;
    const { name, location } = req.body;
    const data = await prisma.branch.update({
      where: { id: parseInt(id) },
      data: {
        name,
        location,
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

// 8. Mendelete Data dari ID
async function DeleteBranch(req: Request, res: Response, next: NextFunction) {
  try {
    // 8.1 Method "delete" digunakan untuk menghapus database
    const { id } = req.params;
    const data = await prisma.branch.delete({
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

// 9. Membuat Pagination dengan Prisma
async function GetBranches(req: Request, res: Response, next: NextFunction) {
  try {
    interface IFilter {
      page: number;
      pageSize: number;
    }
    const { page, pageSize } = req.query;

    const filter: IFilter = {
      page: parseInt(page as string) || 1,
      pageSize: parseInt(pageSize as string) || 10,
    };
    console.log(filter);

    const data = await prisma.branch.findMany({
      skip: filter.page != 1 ? (filter.page - 1) * filter.pageSize : 0,
      take: filter.pageSize,
      // Penambahan filter
      where: {
        AND: [
          {
            name: {
              not: null,
              // Jika ingin boleh null, maka di schema, name harus bersifat optional (tipe data menjadi string?)
            },
          },
          {
            location: "online",
          },
        ],
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
// 5.2 & 9.2 export
// 6.2 export
// 7.2 export
// 8.2 export
export {
  CreateBranch,
  GetBranches,
  GetBranchById,
  UpdateBranchById,
  DeleteBranch,
};
