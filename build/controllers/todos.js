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
exports.updateToDo = exports.getToDoById = exports.getAllToDo = exports.deleteToDo = exports.createToDo = void 0;
const todos_1 = require("../models/todos");
const createToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let todos = yield todos_1.Todos.create(Object.assign({}, req.body));
        if (todos) {
            return res.status(201).json({ message: "ToDo created succesfully", data: todos });
        }
        else {
            res.status(404).send("Unable to create ToDo");
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.createToDo = createToDo;
const deleteToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    const deletedTodo = yield todos_1.Todos.findByPk(id);
    try {
        if (deletedTodo !== null) {
            yield todos_1.Todos.destroy({ where: { id } });
            res.status(204).json({ message: "ToDo deleted succesfully", data: deletedTodo });
            console.log(deletedTodo);
        }
        else {
            res.status(404).json({ message: "ToDo not found in database" });
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.deleteToDo = deleteToDo;
const getAllToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTodos = yield todos_1.Todos.findAll();
        if (allTodos.length >= 1) {
            return res.status(200).json({ message: "ToDos retrieved succesfully", data: allTodos });
        }
        else {
            res.status(400).json({ message: "Unable to retrieve ToDOs List" });
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.getAllToDo = getAllToDo;
const getToDoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const toDo = yield todos_1.Todos.findByPk(id);
        if (toDo) {
            res.status(200).json({ message: "ToDo retrieved succesfully", data: toDo });
        }
        else {
            res.status(404).json({ message: "ToDo not found" });
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.getToDoById = getToDoById;
const updateToDo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id);
    try {
        const toDo = yield todos_1.Todos.findByPk(id);
        if (toDo) {
            yield todos_1.Todos.update(Object.assign({}, req.body), { where: { id } });
            const updatedToDo = yield todos_1.Todos.findByPk(id);
            res.status(200).json({ message: "ToDo updated succesfully", data: toDo });
        }
        else {
            res.status(404).json({ message: "ToDo not found" });
        }
    }
    catch (e) {
        res.status(500).json({ message: e.message });
    }
});
exports.updateToDo = updateToDo;
