import express from "express"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()

console.log(process.env.MONGO_URI)
const PORT = process.env.PORT || 5001

const app = express()

connectDB()

//middleware
app.use(express.json()) //this middleware will parse JSON bodies: req.body
app.use(
    cors({
        origin: "http://localhost:5173"
}))

//our simple custom middleware
app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
    next()
})

app.use("/api/notes", notesRoutes)

app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT)
})

