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
exports.loginUserService = void 0;
const user_1 = __importDefault(require("./../models/mariadb/user"));
const Auth_1 = __importDefault(require("../utils/auth/Auth"));
const Constante_1 = require("./../config/Constante");
const loginUserService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        //Verificamos si existe el email
        const usuario = yield user_1.default.findOne({ where: { email: email } });
        if (!usuario) {
            return {
                msg: "Usuario/Passwrod no son correctos - correo",
                data: usuario,
                error: null,
            };
        }
        console.log(usuario.password);
        //validmos el password
        const validPassword = Auth_1.default.compareSync(password, usuario.password);
        if (!validPassword) {
            return {
                msg: "Usuario/Passwrod no son correctos - password",
                data: usuario,
                error: null,
            };
        }
        //generamos token
        const token = yield Auth_1.default.generarToken(usuario.id, Constante_1.Constantes.key);
        return {
            msg: "Usuario/Passwrod no son correctos - token",
            data: { usuario, token },
            error: null,
        };
    }
    catch (error) {
        return {
            msg: "Usuario/Passwrod no son correctos - error",
            data: null,
            error: error,
        };
    }
});
exports.loginUserService = loginUserService;
//# sourceMappingURL=authService.js.map