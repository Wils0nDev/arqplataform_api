"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getUsuarios = (req, res) => {
    res.json({
        msg: 'getUsuarios'
    });
};
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'getUsuario',
        id
    });
};
const postUsuario = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'postUsuario',
        body
    });
};
const putUsuario = (req, res) => {
    const { id } = req.params;
    const { body } = req;
    res.json({
        msg: 'putUsuario',
        body
    });
};
//# sourceMappingURL=usuariosController.js.map