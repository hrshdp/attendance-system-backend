import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
const router = Router();

router.route("/create-user").post(createUser)
router.route("/get-users").get(getUsers)


export default router