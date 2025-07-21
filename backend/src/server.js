import express from "express"
// const express = require("express")
import notesRoutes from "./routes/notesRoutes.js"
import {connectDB} from "./config/db.js"
import dotenv from "dotenv"
import cors from "cors"
import path from "path"

dotenv.config()

console.log(process.env.MONGO_URI)
const PORT = process.env.PORT || 5001
const __dirname = path.resolve()

const app = express()

connectDB()

//middleware
app.use(express.json()) //this middleware will parse JSON bodies: req.body

const allowedOrigins = [
  "http://localhost:5173",
  "https://notenest-1-hlli.onrender.com" // your frontend Render URL
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// if(process.env.NODE_ENV !== "production") {
//     app.use(
//     cors({
//         origin: "http://localhost:5173"
//     }))
// }

//our simple custom middleware
app.use((req,res,next) => {
    console.log(`Req method is ${req.method} & Req URL is ${req.url}`)
    next()
})

app.use("/api/notes", notesRoutes)

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname,"../frontend/dist")))

    app.get("*",(res,req) => {
    res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
})
}

app.listen(PORT, () => {
    console.log("Server started on PORT: ", PORT)
})

