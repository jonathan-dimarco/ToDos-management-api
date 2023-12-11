"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const todos_1 = require("../models/todos");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = new sequelize_typescript_1.Sequelize({
    dialect: "postgres",
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    logging: false,
    models: [todos_1.Todos],
});
exports.default = connection;
