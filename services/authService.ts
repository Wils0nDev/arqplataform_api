import { Request, Response } from "express";
import bcryptjs from "bcryptjs";
import User from "./../models/mariadb/user";

import Auth from "../utils/auth/Auth";
import { ResponseApi } from "../interfaces/response";
import { Constantes } from './../config/Constante';

export const loginUserService = async (
  req: Request,
  res: Response
): Promise<ResponseApi> => {
  const { email, password } = req.body;
  try {
    //Verificamos si existe el email
    const usuario = await User.findOne({ where: { email: email } });
    if (!usuario) {
      return {
        msg: "Usuario/Passwrod no son correctos - correo",
        data: usuario,
        error: null,
      };
    }
    console.log(usuario.password)
    //validmos el password
    const validPassword = Auth.compareSync(password, usuario.password);
    if (!validPassword) {
      return {
        msg: "Usuario/Passwrod no son correctos - password",
        data: usuario,
        error: null,
      };
    }

    //generamos token
    const token = await Auth.generarToken(usuario.id,Constantes.key);
    return {
        msg: "Usuario/Passwrod no son correctos - token",
        data: {usuario, token},
        error: null,
      };
  } catch (error) {
        return {
                msg: "Usuario/Passwrod no son correctos - error",
                data: null,
                error: error,
        };
  }
};
