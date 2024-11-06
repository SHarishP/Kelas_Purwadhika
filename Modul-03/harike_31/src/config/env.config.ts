import { config } from "dotenv";

config({
  path: ".env",
});

// 33.22 Masukkan SECRET_KEY ke env.config.ts, kemudian masuk ke auth.controller.ts
export const { PORT, SECRET_KEY } = process.env;
