import { config } from "dotenv";
config({
  // Kita bisa mengkonfigure cofig
  path: ".env", // Digunakan untuk specified lokasi file .env
});

export const { PORT, MOCK_API_URL } = process.env;

/* 
    File ini digunakan untuk mengeluarkan .env
*/
