"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const dbname = process.env.DB_NAME || "";
const username = process.env.DB_USER || "";
const password = process.env.DB_PASS || "";
const options = {
    host: process.env.DB_HOST || "",
    dialect: "mariadb",
    port: process.env.PORT,
};
const mariaDB = new sequelize_1.Sequelize(dbname, username, password, options);
exports.default = mariaDB;
//# sourceMappingURL=dbMariaDb.js.map