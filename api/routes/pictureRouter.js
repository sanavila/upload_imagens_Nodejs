import express from "express"
import { createPicture, deletePicture, findAll } from "../controllers/pictureController.js"
import upload from "../config/multer.js"

const router = express.Router()

router.post("/", upload.single("file"), createPicture)
router.get("/", findAll)
router.delete("/:id", deletePicture)

export default router
