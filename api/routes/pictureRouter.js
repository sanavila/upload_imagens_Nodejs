import express from "express"
import { createPicture, deletePicture, findAll, renderForm, renderList, showPicture } from "../controllers/pictureController.js"
import upload from "../config/multer.js"

const router = express.Router()

router.get("/", renderForm)
router.get("/list", findAll)
router.get("/show", renderList)
router.delete("/:id", deletePicture)
router.get("/:id", showPicture)
router.post("/", upload.single("file"), createPicture)

export default router
