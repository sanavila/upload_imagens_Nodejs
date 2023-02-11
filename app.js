import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import pictureRouter from "./api/routes/pictureRouter.js"

dotenv.config()
const app = express()

mongoose.set('strictQuery', true)

const connect = async() => {
  try {
    mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    }, error => {
      if (error)
        return console.log("Falha na conexão com o banco " + error)
      console.log("Banco conectado")
    })
  } catch (error) {
    error
  }
}

app.use(express.json());

app.use("/pictures", pictureRouter)

app.listen(process.env.PORT, () => {
  connect()
  console.log("backend up: "+process.env.PORT)
})
