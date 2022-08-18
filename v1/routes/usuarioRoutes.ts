import { Router } from "express";
import { getUsuario, getUsuarios, postUsuario, putUsuario } from "../../controllers/usuarioController";

const router = Router();

router.get('/',getUsuarios);
router.get('/:id', getUsuario);
router.post('/', postUsuario);
router.put('/:id', putUsuario);


export default router;