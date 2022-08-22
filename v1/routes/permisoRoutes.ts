import { Router } from "express";
import { addPermisoController } from "../../controllers/permisoController";

const router =  Router();

router.post('/add',addPermisoController);


export default router;