import { NextFunction, Request, Response } from "express";
import { ParamSchema, validationResult } from "express-validator";
import User from "../models/mariadb/user";

export const limitValidate = async (params: ParamSchema) => {
  if (!Number.isInteger(Number(params))) {
    throw new Error(`Parametros incorrectos`);
  }
};

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {};

export const UserExist = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log("userexist");
  const { email } = req.body;
  const usuario = await User.findOne({ where: { email: email } });

  if (usuario) {
    return res.status(401).json({
      msg: "Ya tiene una cuenta registrada",
      data: null,
      error: null,
    });
  }

  next();
};

export const ValidateCampos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors);
  }

  next();
};
