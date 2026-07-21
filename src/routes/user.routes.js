import { Router } from "express"
import { regestierUser } from "../controllers/user.controller.js"

const router = Router()

router.route("/register").post(regestierUser)

export default router