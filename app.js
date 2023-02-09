import express from "express"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"
import pictureRouter from "./api/routes/pictureRouter.js"

dotenv.config()
const app = express()

mongoose.set('strictQuery', true)

const connect = async() => {
  try {
    mongoose.connect(process.env.MONGO)
    console.log("Banco conectado")
  } catch (error) {
    error
  }
}

app.use(express.json());

app.use("/pictures", pictureRouter)

app.listen(process.env.PORT, () => {
  connect()
  console.log("backend connected!")
})
