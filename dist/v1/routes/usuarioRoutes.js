"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuarioController_1 = require("../../controllers/usuarioController");
const user_1 = require("../../middlewares/user");
const router = (0, express_1.Router)();
router.get('/', usuarioController_1.getUsuarios);
router.get('/:id', usuarioController_1.getUsuario);
router.post('/register', [
    (0, express_validator_1.check)("email", "Esto no es un email").isEmail(),
    user_1.ValidateCampos
], usuarioController_1.postUsuario);
router.put('/:id', usuarioController_1.putUsuario);
exports.default = router;
//# sourceMappingURL=usuarioRoutes.js.map