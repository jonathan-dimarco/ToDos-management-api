import express from "express"
import dotenv from "dotenv"
import todosRoutes from "./routes/todos"
import connection from "./db/config"

dotenv.config()

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const port = process.env.PORT

app.use("/api/todos", todosRoutes)

const dbConnect = async () => {
    try {
        await connection.authenticate()
        console.log("Database connected succesfully")
        await connection.sync()
    } catch (error) {
        console.log("Database connection failed", error)
    }
}
app.listen(port, ()=> {
    dbConnect()
    console.log(`App listening on port: ${port}`)
})