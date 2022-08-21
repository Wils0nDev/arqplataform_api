import { Request, Response } from "express";
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

export const postUsuario = (req: Request, res: Response) => {
  const resp = postUsuarioService(req, res);

  resp
    .then((data) => {
      
      if (data.error.length === 0) {
        res.status(201).json({ data });
      } else {
        res.status(401).json({ data });
      }
    })
    .catch((err) => {
      console.log(err);
    });
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
