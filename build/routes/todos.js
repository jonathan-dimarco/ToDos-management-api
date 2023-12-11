"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todos_1 = require("../controllers/todos");
const router = express_1.default.Router();
//Get all ToDos
router.get("/", todos_1.getAllToDo);
//Get ToDo by ID
router.get("/:id", todos_1.getToDoById);
//Create ToDo
router.post("/", todos_1.createToDo);
//Update ToDo
router.put("/:id", todos_1.updateToDo);
//Delete ToDO
router.delete("/:id", todos_1.deleteToDo);
exports.default = router;
