import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

export const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

db.connect((err) => {
    if (err) {
        console.error("Erro na conexão com o banco de dados:", err.message)
    } else {
        console.log("Conectado ao banco de dados com sucesso!")
    }
})