import { Request, Response } from "express";
import  bcryptjs from "bcryptjs"
import User from './../models/mariadb/user';

export const loginUserService = async(req:Request, res:Response)=>{

        const {email , password }  =  req.body
        

        try {
        //Verificamos si existe el email
  
        const usuario  = await User.findOne({where: {  email: email}}) ;
        if( !usuario  ) {
                
               return {
                    msg : 'Usuario/Passwrod no son correctos - correo',
                    usuario
                };
        }

       const validPassword = bcryptjs.compareSync(password,usuario.password)

        return usuario

        } catch (error) {
                
        }

        


       
}