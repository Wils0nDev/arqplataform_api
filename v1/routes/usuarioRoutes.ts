import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario } from "../../controllers/usuarioController";
import { UserExist, ValidateCampos } from '../../middlewares/user';

const router = Router();

router.get('/',getUsuarios);
router.get('/:id', getUsuario);
router.post('/register', [
    UserExist,
    ValidateCampos
],
postUsuario);
router.put('/:id', putUsuario);




export default router;