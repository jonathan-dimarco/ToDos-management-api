import { ErrorRequestHandler, RequestHandler } from "express"
import { Todos } from "../models/todos"
import { Identifier } from "sequelize"

export const createToDo: RequestHandler = async (req, res) => {
   try {
     let todos = await Todos.create({...req.body})
     if(todos){
     return res.status(201).json({message: "ToDo created succesfully", data: todos })
    } else {
        res.status(404).send("Unable to create ToDo")
    }
   } catch (e:any) {
        res.status(500).json({message: e.message})
   }
}

export const deleteToDo: RequestHandler = async (req, res) => {
    const id:Identifier = Number(req.params.id)
    const deletedTodo:  Todos | null = await Todos.findByPk(id)    
    try {
        if(deletedTodo !== null){   
        await Todos.destroy({where:{id}})
        res.status(204).json({message: "ToDo deleted succesfully", data: deletedTodo})
        console.log(deletedTodo)
        } else {
           res.status(404).json({message: "ToDo not found in database"})
        }
        } catch (e: any) {
        res.status(500).json({message: e.message})
    }

}

export const getAllToDo: RequestHandler = async (req, res) => {
    try {
        const allTodos: Todos[] = await Todos.findAll()
        if(allTodos.length >= 1){
        return res.status(200).json({message: "ToDos retrieved succesfully", data:allTodos})
        } else {
            res.status(400).json({message: "Unable to retrieve ToDOs List"})
        }
    } catch (e:any) {
        res.status(500).json({message: e.message})
    }
}

export const getToDoById: RequestHandler = async (req, res) => {
    const id:Identifier = Number(req.params.id) 
    try {
    const toDo: Todos | null = await Todos.findByPk(id)
    if(toDo){
        res.status(200).json({message: "ToDo retrieved succesfully", data:toDo})
    } else {
        res.status(404).json({message: "ToDo not found"})
    }
    } catch(e: any) {
        res.status(500).json({message: e.message})
    }
}

export const updateToDo: RequestHandler = async (req, res) => {
    const id:Identifier = Number(req.params.id)
    try {
    const toDo: Todos | null = await Todos.findByPk(id) 

    if(toDo){

    await Todos.update({...req.body}, {where:{id}})
    const updatedToDo: Todos | null = await Todos.findByPk(id)
    res.status(200).json({message: "ToDo updated succesfully", data:toDo})

    } else {
        res.status(404).json({message: "ToDo not found"})
    }
    } catch (e: any) {
        res.status(500).json({message: e.message})
    }

}

