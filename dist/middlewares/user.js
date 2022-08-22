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
exports.ValidateCampos = exports.UserExist = exports.validateRequest = exports.limitValidate = void 0;
const express_validator_1 = require("express-validator");
const user_1 = __importDefault(require("../models/mariadb/user"));
const limitValidate = (params) => __awaiter(void 0, void 0, void 0, function* () {
    if (!Number.isInteger(Number(params))) {
        throw new Error(`Parametros incorrectos`);
    }
});
exports.limitValidate = limitValidate;
const validateRequest = (req, res, next) => { };
exports.validateRequest = validateRequest;
const UserExist = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("userexist");
    const { email } = req.body;
    const usuario = yield user_1.default.findOne({ where: { email: email } });
    if (usuario) {
        return res.status(401).json({
            msg: "Ya tiene una cuenta registrada",
            data: null,
            error: null,
        });
    }
    next();
});
exports.UserExist = UserExist;
const ValidateCampos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
});
exports.ValidateCampos = ValidateCampos;
//# sourceMappingURL=user.js.map