import { Router } from "express";
import {  loginUser  }  from  "../../controllers/authController"
import { ValidateEmail, ValidateCampos } from "../../middlewares/user";
import { check }  from  "express-validator"
import { postUsuario } from "../../controllers/usuarioController";

const router = Router();

router.post('/login',loginUser)
router.post('/register',[
   check("email","Esto no es un email").isEmail(),
   check("name","El nombre es obligatorio").not().isEmpty(),
   check("lastname","El nombre es obligatorio").not().isEmpty(),
   check("password","El password debe tener más de 6 de letras").isLength({min:6}),
   check('email').custom(ValidateEmail),
    ValidateCampos
],
postUsuario)

export default router;