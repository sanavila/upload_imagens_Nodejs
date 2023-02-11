import Picture from "../models/Picture.js"
import fs from "fs"
import path from "path"
import { fileURLToPath } from 'url';

export const createPicture = async (req, res) => {
  try {
    const { name } = req.body
    const file = req.file
    const picture = new Picture({
      name,
      src: file.path
    })
    await picture.save()
    res.json({ picture, msg: "Imagem salva com sucesso."})
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Erro ao tentar salvar imagem", error})
  }
}

export const deletePicture = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id)
    if(!picture) {
      return res.status(404).json({ message: "Imagem não encontrada"})
    }

    fs.unlinkSync(picture.src)
    await picture.remove()
    res.json({ message: "Imagem removida com sucesso"})
    
  } catch (error) {
    res.status(500).json({ message: "Erro ao tentar excluir imagem"})
  }
}
export const showPicture = async (req, res) => {
  try {
    const picture = await Picture.findById(req.params.id)
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(path.join(__dirname, "..", "..", picture.src))
  } catch (error) {
    console.log(error)
    res.status(404).send("Erro na pesquisa")
  }
}
export const findAll = async(req, res) =>{
  try {
    const pictures = await Picture.find()
    res.json(pictures)
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar imagem."})
  }
}
export const renderForm = async(req, res) =>{
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(path.join(__dirname, "../view/form.html"))
  } catch (error) {
    console.log(error)
    res.status(500).send("Erro ao construir a pagina!")
  }
}
export const renderList = async(req, res) =>{
  try {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);
    res.sendFile(path.join(__dirname, "../view/list.html"))
  } catch (error) {
    console.log(error)
    res.status(500).send("Erro ao construir a pagina!")
  }
}
