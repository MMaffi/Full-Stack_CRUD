import mysql from "mysql2"

export const db = mysql.createConnection({
    host: "localhost",
    user: "<your_user>",
    password: "<your_password>",
    database: "<name_of_database>"
})
