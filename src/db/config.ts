import { Sequelize } from "sequelize-typescript";
import { Todos } from "../models/todos";
import dotenv from "dotenv"

dotenv.config()

const connection = new Sequelize({
    dialect:"postgres",
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,     
    logging: false,
    models: [Todos],
})

export default connection