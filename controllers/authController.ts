import { Request, Response } from "express"
import { loginUserService } from '../services/authService';
//const { generarJWT } = require('../helpers/generar-jwt');


export const loginUser = async (req:Request, res: Response)=>{
   
    const resp = await loginUserService(req,res)
    try {

        res.status(200).json({
            resp 
        })
        
    } catch (error) {
        
       return res.status(500).json({
            msj: 'Algo salio mal'
        })
    }

}


