import express from "express"
import mongoose, { mongo } from "mongoose"
import dotenv from "dotenv"

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

app.listen(process.env.PORT, () => {
  connect()
  console.log("backend connected!")
})
