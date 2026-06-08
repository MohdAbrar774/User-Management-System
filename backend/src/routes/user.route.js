import * as userController from "../controllers/user.controller.js"
import express from 'express'

const router = express.Router()


router.post("/",userController.addUserController)
router.get("/",userController.getUserController)
router.delete("/:id",userController.deleteUserController)



export default router
