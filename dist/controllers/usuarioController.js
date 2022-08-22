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
exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const user_1 = __importDefault(require("../models/mariadb/user"));
const usuarioService_1 = require("../services/usuarioService");
//const usuarioService = require("../services/usuarioService")
const getUsuarios = (req, res) => {
    const usuarios = (0, usuarioService_1.getUsuariosService)();
    res.json({
        msg: "getUsuarios",
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = (0, usuarioService_1.getUsuarioService)(req);
    res.json({
        msg: "getUsuario",
        id,
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userObject = Object.keys(req.body);
    console.log(user_1.default.name);
    for (const property in userObject) {
        userObject[property];
    }
    // const resp = await postUsuarioService(req,res);
    // try {
    //   // if (resp.error.length === 0) {
    //   //         res.status(201).json(resp);
    //   //       } else {
    //   //         res.status(401).json(resp);
    //   //  }
    // } catch (error) {
    //   console.log(error)
    //   return res.status(500).json(error)
    // }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const usuario = (0, usuarioService_1.putUsuarioService)();
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: "putUsuario",
        body,
    });
};
exports.putUsuario = putUsuario;
//# sourceMappingURL=usuarioController.js.map