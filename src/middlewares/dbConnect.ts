import "reflect-metadata";
import { DataSource } from "typeorm";
import { constants } from "./constants";

export const dataSource = new DataSource({
  type: "mysql",
  host: constants.DB_HOST,
  port: constants.DB_PORT,
  username: constants.DB_USER,
  password: constants.DB_PASSWORD,
  database: constants.DB_NAME,
  synchronize: true,
  logging: true,
  subscribers: [],
  migrations: [],
  entities: ["./../entity/*.ts"]
});