import { Request, Response } from "express"
import { loginUserService } from '../services/authService';
import { UserI } from '../interfaces/user';

//const { generarJWT } = require('../helpers/generar-jwt');


export const loginUser = async (req:Request, res: Response)=>{
   
    const resp  = await loginUserService(req,res)
    try {

        
        res.status(200).json({
            data:resp
        })
        
    } catch (error) {
        
       return res.status(401).json({
            msj: 'Algo salio mal'
        })
    }

}


