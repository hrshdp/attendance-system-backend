import { Router } from "express";
import { createUser, getUsers } from "../controllers/user.controller.js";
import  { validate }  from "../middlewares/validate.js";
import { userSchema }   from "../validators/user.validator.js";


const router = Router();

// POST -> validates request before creating user
router.route("/create-user").post( validate(userSchema),createUser);

router.route("/get-users").get(getUsers); 


export default router;