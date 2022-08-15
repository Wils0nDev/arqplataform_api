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
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidateCampos = exports.limitValidate = void 0;
const express_validator_1 = require("express-validator");
const limitValidate = (params) => __awaiter(void 0, void 0, void 0, function* () {
    if (!Number.isInteger(Number(params))) {
        throw new Error(`Parametros incorrectos`);
    }
});
exports.limitValidate = limitValidate;
const ValidateCampos = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json(errors);
    }
    next();
});
exports.ValidateCampos = ValidateCampos;
//# sourceMappingURL=user.js.map