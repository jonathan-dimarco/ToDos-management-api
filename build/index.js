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
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const todos_1 = __importDefault(require("./routes/todos"));
const config_1 = __importDefault(require("./db/config"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
const port = process.env.PORT;
app.use("/api/todos", todos_1.default);
const dbConnect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield config_1.default.authenticate();
        console.log("Database connected succesfully");
        yield config_1.default.sync();
    }
    catch (error) {
        console.log("Database connection failed", error);
    }
});
app.listen(port, () => {
    dbConnect();
    console.log(`App listening on port: ${port}`);
});
