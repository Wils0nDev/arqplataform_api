import { Router } from "express";
import {  loginUser  }  from  "../../controllers/authController"
import { ValidateCampos } from "../../middlewares/user";
import { check }  from  "express-validator"

const router = Router();

router.post('/login',loginUser)


export default router;