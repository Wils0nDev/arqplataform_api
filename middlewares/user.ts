import { NextFunction,Request, Response} from "express";
import { ParamSchema, validationResult } from "express-validator";


export const limitValidate = async (params:ParamSchema) => {

  if(!Number.isInteger(Number(params))){
    throw new Error(`Parametros incorrectos`);
  }
  
};


export const ValidateCampos = async (req:Request, res:Response, next:NextFunction) => {
  console.log(req.body)
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
      return res.status(400).json(errors);
  }
  
  next();

};


