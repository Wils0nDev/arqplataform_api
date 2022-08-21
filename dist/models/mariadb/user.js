"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dbMariaDb_1 = __importDefault(require("./../../config/dbMariaDb"));
class User extends sequelize_1.Model {
}
User.init({
    id: { type: sequelize_1.DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
    name: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    lastname: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    email: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    password: { type: sequelize_1.DataTypes.STRING, allowNull: false },
    image: { type: sequelize_1.DataTypes.STRING },
    sex: { type: sequelize_1.DataTypes.CHAR, allowNull: false },
    profile_id: { type: sequelize_1.DataTypes.INTEGER, allowNull: false },
    createdAt: { type: sequelize_1.DataTypes.DATE, defaultValue: sequelize_1.DataTypes.NOW },
    updatedAt: { type: sequelize_1.DataTypes.DATE },
    deleted_at: { type: sequelize_1.DataTypes.DATE }
}, {
    sequelize: dbMariaDb_1.default,
    tableName: 'users',
});
User.prototype.toJSON = function () {
    const user = Object.assign({}, this.get());
    delete user.password;
    return user;
};
exports.default = User;
//# sourceMappingURL=user.js.map