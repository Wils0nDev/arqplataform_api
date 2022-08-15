import { Request, Response } from "express"
import { getUsuarioService, getUsuariosService, postUsuarioService, putUsuarioService } from "../services/usuarioService"
//const usuarioService = require("../services/usuarioService")



export const getUsuarios = (req:Request, res: Response)=> {
    
    const usuarios = getUsuariosService()
    res.json({
        msg:'getUsuarios'
    })
}

export const getUsuario= (req:Request, res: Response)=> {
    const {id} = getUsuarioService(req)
    
    res.json({
        msg:'getUsuario',
        id
    })
}

export const postUsuario= (req:Request, res: Response)=> {
    
    const usuario = postUsuarioService();
    const {body} = req;
    res.json({
        msg:'postUsuario',
        body
    })
}
export const putUsuario= (req:Request, res: Response)=> {

    const usuario = putUsuarioService();

    const  {id} = req.params
    const {body} = req;
    res.json({
        msg:'putUsuario',
        body
    })
}

