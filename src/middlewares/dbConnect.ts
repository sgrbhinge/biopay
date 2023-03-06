import path from "path";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { constants } from "./constants";
import { User } from "../entity/User";
import { Transaction } from "../entity/Transaction";
// let entities = path.join(__dirname, "..", "entity/*.ts");

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
  entities: [User, Transaction],
});
// entities: ["src/entity/*.ts"],

dataSource
  .initialize()
  // .then((data) => {
  //   console.log(data.options.entities);
  // })
  // .catch((error) => console.log(error));