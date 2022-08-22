import { Router } from "express";
import {  loginUser  }  from  "../../controllers/authController"
import { UserExist, ValidateCampos } from "../../middlewares/user";
import { check }  from  "express-validator"
import { postUsuario } from "../../controllers/usuarioController";

const router = Router();

router.post('/login',loginUser)
router.post('/register',[
   // UserExist,
   // ValidateCampos
],
postUsuario)

export default router;