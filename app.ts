import dotenv from "dotenv";
import Server from "./config/server";
import  DataBaseMongo  from "./config/dbMongo";
import DataBaseMariaDb from "./config/dbMariaDb";
dotenv.config();

const server = new Server();
server.listen();

