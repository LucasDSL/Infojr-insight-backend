import express from "express"
import {
  getGeneralController,
  postGeneralController,
} from "../Controllers/General.controller"

const router = express.Router()
router.get("/insight/:id?", getGeneralController)
router.post("/insight", postGeneralController)
export default router
