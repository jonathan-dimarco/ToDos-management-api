import express, {Router} from "express"
import { 
    createToDo,
    deleteToDo,
    updateToDo,
    getAllToDo,
    getToDoById } from "../controllers/todos"

const router = express.Router() 

//Get all ToDos
router.get("/", getAllToDo)

//Get ToDo by ID
router.get("/:id", getToDoById)

//Create ToDo
router.post("/", createToDo)

//Update ToDo
router.put("/:id", updateToDo)

//Delete ToDO
router.delete("/:id", deleteToDo)

export default router