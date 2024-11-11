// Diguankan untuk extent sebuah request. Nantinya, "User" akan menjadi payload untuk Web Token. Dimana access token berisi semua property dari "User"
export type User = {
  email: string;
  name: string;
  role: string;
};

declare global {
  namespace Express {
    export interface Request {
      user?: User;
    }
  }
}
