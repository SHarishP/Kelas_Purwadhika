// 33.28 Membuat authentication
export type User = {
  email: string;
  role: string;
};

// 33.29 melakukan extend user. Perlu membuat ini supaya kita bisa melakukan req.user
declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}

// 33.30 Buat file auth.middleware.ts, masuk ke file tsb
