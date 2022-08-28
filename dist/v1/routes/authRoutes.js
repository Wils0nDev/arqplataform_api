"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authController_1 = require("../../controllers/authController");
const user_1 = require("../../middlewares/user");
const express_validator_1 = require("express-validator");
const usuarioController_1 = require("../../controllers/usuarioController");
const router = (0, express_1.Router)();
router.post('/login', authController_1.loginUser);
router.post('/register', [
    (0, express_validator_1.check)("email", "Esto no es un email").isEmail(),
    (0, express_validator_1.check)("name", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("lastname", "El nombre es obligatorio").not().isEmpty(),
    (0, express_validator_1.check)("password", "El password debe tener más de 6 de letras").isLength({ min: 6 }),
    (0, express_validator_1.check)('email').custom(user_1.ValidateEmail),
    user_1.ValidateCampos
], usuarioController_1.postUsuario);
exports.default = router;
//# sourceMappingURL=authRoutes.js.map