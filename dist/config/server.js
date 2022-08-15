"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usuarioRoutes_1 = __importDefault(require("../v1/routes/usuarioRoutes"));
const authRoutes_1 = __importDefault(require("../v1/routes/authRoutes"));
const apiPath_1 = require("../api_path/apiPath");
const cors_1 = require("../middlewares/cors");
const dbMongo_1 = __importDefault(require("./dbMongo"));
const dbMariaDb_1 = __importDefault(require("./dbMariaDb"));
class Server {
    constructor() {
        this.apiPaths = apiPath_1.apiPaths;
        this.app = (0, express_1.default)();
        this.port = process.env.PORT_SERVER || '8000';
        //metodos iniciales
        this.middlewares();
        this.routes();
        this.dbConnection();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield dbMariaDb_1.default.authenticate();
                // console.log('conectado mariadb')
                const mongodb = new dbMongo_1.default();
                yield mongodb.connect();
            }
            catch (error) {
                throw new Error('error en conexión');
            }
        });
    }
    middlewares() {
        //CORS
        this.app.use(cors_1.Cors);
        //lectura del body
        this.app.use(express_1.default.json());
        //carpeta publica
        this.app.use(express_1.default.static('public'));
    }
    routes() {
        this.app.use(this.apiPaths.auth, authRoutes_1.default);
        this.app.use(this.apiPaths.usuarios, usuarioRoutes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto ' + this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map