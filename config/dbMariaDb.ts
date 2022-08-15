import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const dbname: string = process.env.DB_NAME || "";
const username: string = process.env.DB_USER || "";
const password: string = process.env.DB_PASS || "";
const options: object = {
  host: process.env.DB_HOST || "",
  dialect: "mariadb",
  port: process.env.PORT,
};

const mariaDB = new Sequelize(dbname, username, password, options);
export default mariaDB;
