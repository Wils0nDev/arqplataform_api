"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bcrypPassword = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const bcrypPassword = (password) => {
    //encriptar usuario
    const saltRount = 10;
    return bcryptjs_1.default.hashSync(password, saltRount);
};
exports.bcrypPassword = bcrypPassword;
//# sourceMappingURL=Bcryp.js.map