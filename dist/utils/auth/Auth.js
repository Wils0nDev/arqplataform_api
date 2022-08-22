"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = __importStar(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class Auth {
    static hashPasswordSync(password, rounds) {
        return bcrypt.hashSync(password, rounds);
    }
    static compareSync(password, dbHash) {
        return bcrypt.compareSync(password, dbHash);
    }
    static hashPassword(password, rounds, callback) {
        bcrypt.hash(password, rounds, (error, hash) => {
            callback(error, hash);
        });
    }
    static compare(password, dbHash, callback) {
        bcrypt.compare(password, dbHash, (err, match) => {
            if (match) {
                // passwords match
                callback(null, true);
            }
            else {
                // passwords do not match
                callback('Invalid password match', null);
            }
        });
    }
    static generarToken(id, secretkey) {
        return new Promise((resolve, reject) => {
            const payload = { id };
            jsonwebtoken_1.default.sign(payload, secretkey, {
                expiresIn: '120'
            }, (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se puede generar el JWT');
                }
                else {
                    resolve(token);
                }
            });
        });
    }
}
exports.default = Auth;
//# sourceMappingURL=Auth.js.map