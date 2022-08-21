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
exports.putUsuarioService = exports.postUsuarioService = exports.getUsuarioService = exports.getUsuariosService = void 0;
const user_1 = __importDefault(require("./../models/mariadb/user"));
const Auth_1 = __importDefault(require("../utils/auth/Auth"));
const Constante_1 = require("../config/Constante");
const getUsuariosService = () => {
    return;
};
exports.getUsuariosService = getUsuariosService;
const getUsuarioService = (req) => {
    const { id } = req.params;
    return { id };
    // const {id} = req.params;
};
exports.getUsuarioService = getUsuarioService;
const postUsuarioService = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //errores de middleware
    const { body } = req;
    const { password } = req.body;
    try {
        const user = new user_1.default(body);
        const { salt } = Constante_1.Constantes;
        //encriptar contraseña
        user.password = Auth_1.default.hashPasswordSync(password, salt);
        const usuario = yield user.save();
        console.log(usuario);
        return {
            msg: "Usuario registrado correctamente",
            data: usuario,
            error: [],
        };
    }
    catch (error) {
        return {
            msg: "Algo salio mal",
            data: null,
            error: error.errors,
        };
    }
});
exports.postUsuarioService = postUsuarioService;
const putUsuarioService = () => {
    return;
    // const  {id} = req.params
    // const {body} = req;
};
exports.putUsuarioService = putUsuarioService;
//# sourceMappingURL=usuarioService.js.map