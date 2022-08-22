import { Request, Response } from "express";
import { addPlanService } from "./../services/planService";
import { ResponseApi } from "./../interfaces/response";

export const addPlanController =  (
  req: Request,
  res: Response
) => {
  const plan =  addPlanService(req);


  try {


  } catch (error) {
    return res.status(401).json({
      msg: "Se registron el plan correctamente",
      data: null,
      error: error,
    });
  }
};
