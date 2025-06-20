import express from "express"
import cors from "cors"
import userRoutes from "./routes/users.js"

const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)

app.listen(port, () => {
    console.log("O servidor está rodando na porta 3001!")
})