import { Request } from "express";
import { ResponseApi } from "../interfaces/response";
import Planes from "../models/mariadb/plan";

export const addPlanService = async (req: Request): Promise<ResponseApi> => {
  const { body } = req;

  try {
    const plan = new Planes(body);
    const planes = await plan.save();

    return {
      msg: "Usuario registrado correctamente",
      data: planes,
      error: [],
    };
  } catch (error) {
    return {
      msg: "Usuario registrado correctamente",
      data: {},
      error: error,
    };
  }
};
