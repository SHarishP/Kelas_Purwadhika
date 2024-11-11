///////////////////////////////////////////////////////////////////////////////////
// Membuat Middleware untuk parsing Home Data menjadi JSON dengan menggukan Multer.
///////////////////////////////////////////////////////////////////////////////////
// 25.5 Import Request dari dari Express
import { Request } from "express";

// 25.6 Import multer dari multer
import multer from "multer";

// 25.7 Import join dari path
import { join } from "path";
// "join" bertfungsi untuk menggabungkan 2 direktori

// 25.8 Buat type alias DestinationCallback
type DestinationCallback = (error: Error | null, destination: string) => void;
// Fungsi dari type "DestinationCallback" adalah sebagai type untuk callback yang bertujuan menentukan di direktori/folder mana kita menyimpan file kita di dalam server

// 25.9 Buat type alias FileNameCallback
type FileNameCallback = (error: Error | null, filename: string) => void;
// Fungsi dari type "FileNameCallback" adalah sebagi type untuk callback yang bertujuan memberikan nama file yang kita simpan

// 25.10 Buat function SingleUploader yang menerima filePrefix
export const SingleUploader = (filePrefix: string, folderName?: string) => {
  // 25.15 Mebambahkan limit maximal 1Mb
  const maxSize = 1 * 1024 * 1024;

  // Fungsi dari filePrefix bertujuan untuk memberikan pembeda dari file kita. Contoh File untuk avatar dapat diberi nama file "avt_xxx", jika file product nama file "product_xxx"
  const defaultDir = join(__dirname, "../../public");
  // "__dirname" berfungsi untuk mengeluarkan direktori sampai ke API / root folder
  // 25.11 Buat folder "public" dan "public/avatar" di dalam "api"

  // 25.12 Cek isi dari defaultDir
  console.log(defaultDir);

  // 25.13 Package Multer membutuhkan storage, storage pada server disebut dengan diskStorage. Buat storage untuk Multer
  const storage = multer.diskStorage({
    destination: (
      req: Request,
      file: Express.Multer.File,
      cb: DestinationCallback
    ) => {
      const destination = folderName ? defaultDir + folderName : defaultDir;
      cb(null, destination);
    },
    filename: (
      req: Request,
      file: Express.Multer.File,
      cb: FileNameCallback
    ) => {
      const originalNameParts = file.originalname.split(".");
      console.log(originalNameParts);
      const fileExtension = originalNameParts[originalNameParts.length - 1];
      const newFileName = filePrefix + Date.now() + "." + fileExtension;
      cb(null, newFileName);
    },
  });

  //   25.14 Lakukan Return Multer, kita juga bisa menambahkan limit ukuran file, cek 25.15 diatas. Next masuk ke file auth.route.ts
  return multer({ storage: storage, limits: { fileSize: maxSize } }).single(
    "file"
  );
  //   single("file") adalah penamaan dari file. Bisa sesuai dengan form data, ex: "avatar". Di case ini, file adalah general
};
