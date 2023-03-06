require("dotenv").config();

export const constants = {
  PORT: process.env.PORT,
  API_URL: process.env.API_URL || "http://34.143.136.192:5000/signup",
  NODE_ENV: process.env.NODE_ENV,
  DB_HOST: process.env.DB_HOST,
  DB_NAME: process.env.DB_NAME,
  DB_PORT: Number(process.env.DB_PORT) || 3306,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD
};
