import { Request, Response } from "express";
import User from "./../models/mariadb/user";
import Auth from "../utils/auth/Auth";
import { Constantes } from "../config/Constante";
import { ResponseApi } from "../interfaces/response";

export const getUsuariosService = () => {
  return;
};

export const getUsuarioService = (req: Request) => {
  const { id } = req.params;
  return { id };
  // const {id} = req.params;
};

export const postUsuarioService = async (
  req: Request) => {
  //errores de middleware
  const { body }  = req;
  const { password  }  = req.body;

  try {
        const user = new User(body);
        const { salt } = Constantes;
        //encriptar contraseña

        user.password = Auth.hashPasswordSync(password, salt);

        const usuario = await user.save();

        return {
          msg: "Usuario registrado correctamente",
          data: usuario,
          error: [],
        };
  } catch (error: any) {

    return {
      msg: "Ya existe un usuario",
      data: null,
      error: error.errors,
    };

       

  }

  
};



export const putUsuarioService = () => {
  return;

  // const  {id} = req.params
  // const {body} = req;
};
