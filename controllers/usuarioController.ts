import { Request, Response } from "express";
import User from '../models/mariadb/user';
import { TypedRequestBody } from '../types/TypeRequestBody';
import { UserI } from '../interfaces/user';
import {
  getUsuarioService,
  getUsuariosService,
  postUsuarioService,
  putUsuarioService,
} from "../services/usuarioService";
//const usuarioService = require("../services/usuarioService")

export const getUsuarios = (req: Request, res: Response) => {
  const usuarios = getUsuariosService();
  res.json({
    msg: "getUsuarios",
  });
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = getUsuarioService(req);

  res.json({
    msg: "getUsuario",
    id,
  });
};

export const postUsuario = async (req: TypedRequestBody<User>, res: Response) => {
  
  const userObject = Object.keys(req.body)
  console.log(User.name)
  for (const property in userObject) {
        userObject[property] 
  }
  // const resp = await postUsuarioService(req,res);
  
  // try {
  //   // if (resp.error.length === 0) {
  //   //         res.status(201).json(resp);
  //   //       } else {
  //   //         res.status(401).json(resp);
  //   //  }
  // } catch (error) {
  //   console.log(error)
  //   return res.status(500).json(error)
  // }


};
export const putUsuario = (req: Request, res: Response) => {
  const usuario = putUsuarioService();

  const { id } = req.params;
  const { body } = req;
  res.json({
    msg: "putUsuario",
    body,
  });
};
