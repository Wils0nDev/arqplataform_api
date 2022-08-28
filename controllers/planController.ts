import { Request, Response } from "express";
import { addPlanService } from "./../services/planService";
import { ResponseApi } from "./../interfaces/response";

export const addPlanController = async (req: Request, res: Response) => {
  const plan = await addPlanService(req);

  try {
    if (plan.error.length === 0) {
      res.status(201).json(plan);
    } else {
      res.status(401).json(plan);
    }
  } catch (error) {
    return res.status(500).json(error)
  }
};
