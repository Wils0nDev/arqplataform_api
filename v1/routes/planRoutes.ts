import { Router } from "express";
import { addPlanController } from "../../controllers/planController";

const router =  Router();

router.post('/add',addPlanController);


export default router;