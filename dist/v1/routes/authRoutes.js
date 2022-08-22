"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/authController");
const usuarioController_1 = require("../../controllers/usuarioController");
const router = (0, express_1.Router)();
router.post('/login', authController_1.loginUser);
router.post('/register', [
// UserExist,
// ValidateCampos
], usuarioController_1.postUsuario);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map