"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
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
const postUsuario = (req, res) => {
    const resp = (0, usuarioService_1.postUsuarioService)(req, res);
    resp
        .then((data) => {
        if (data.error.length === 0) {
            res.status(201).json({ data });
        }
        else {
            res.status(401).json({ data });
        }
    })
        .catch((err) => {
        console.log(err);
    });
};
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